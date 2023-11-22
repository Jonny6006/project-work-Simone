import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, of } from 'rxjs';

import { LocalstorageService } from '../localstorage/localstorage.service';
import { Reservation } from '../../models/reservation.model';

@Injectable({
  providedIn: 'root',
})
export class GroomingService {
  private readonly groomingKey = 'grooming';

  private reservationList: Reservation[] = [];

  private readonly reservationList$: BehaviorSubject<Reservation[]> =
    new BehaviorSubject<Reservation[]>([]);

  constructor(private readonly localStorage: LocalstorageService) {
    this.setDefaultReservationList();
  }

  getall(): Observable<Reservation[]> {
    return this.reservationList$.asObservable();
  }

  getById(id: number): Observable<Reservation | undefined> {
    return this.reservationList$.pipe(
      map((reservations) =>
        reservations.find((reservation) => reservation.id === id)
      )
    );
  }

  save(reservation: Reservation): Observable<any> {
    reservation.setId(this.reservationList.length + 1);
    const reservationListUpdated = [...this.reservationList, reservation];
    this.update(reservationListUpdated);

    return of(reservationListUpdated);
  }

  edit(reservation: Reservation): Observable<any> {
    this.reservationList.map((reservationRes) =>
      reservation.id === reservationRes.id ? reservation : reservationRes
    );
    this.update(this.reservationList);
    return of(this.reservationList);
  }

  delete(id: number): Observable<any> {
    const reservationListUpdated = this.reservationList.filter(
      (reservation) => reservation.id !== id
    );
    this.update(reservationListUpdated);
    return of(reservationListUpdated);
  }

  private update(reservationListUpdated: Reservation[]) {
    this.localStorage.setItem(this.groomingKey, reservationListUpdated);
    this.reservationList$.next(reservationListUpdated);
    this.reservationList = reservationListUpdated;
  }

  private setDefaultReservationList() {
    const reservationListFromStorage = this.localStorage.getItem(
      this.groomingKey
    );
    if (reservationListFromStorage) {
      this.reservationList = reservationListFromStorage;
      return this.reservationList$.next(reservationListFromStorage);
    }

    this.localStorage.setItem(this.groomingKey, this.reservationList);
    this.reservationList$.next(this.reservationList);
  }
}
