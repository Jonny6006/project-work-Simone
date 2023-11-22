import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation, STATO_PRENOTAZIONE } from 'src/app/grooming/models/reservation.model';
import { GroomingService } from 'src/app/grooming/services/grooming/grooming.service';

@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.scss']
})
export class ReservationDetailsComponent {
  currentId: number = 0;
  reservation?: Reservation;
  currentStatoPrenotazione: any;
  statoReservation = [
    { name: STATO_PRENOTAZIONE.TODO, code: STATO_PRENOTAZIONE.TODO },
    { name: STATO_PRENOTAZIONE.DOING, code: STATO_PRENOTAZIONE.DOING },
    { name: STATO_PRENOTAZIONE.DONE, code: STATO_PRENOTAZIONE.DONE },
  ];
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly grooomingService: GroomingService,
    private readonly router: Router
  ) {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      console.log('queryParamsMAP -->', params);
      this.currentId = Number(params.get('id'));
      this.grooomingService.getById(this.currentId).subscribe((reservation) => {
        this.reservation = reservation;
        this.currentStatoPrenotazione = this.statoReservation.find(
          (statoReservation) =>
            statoReservation.code === this.reservation?.statoPrenotazione
        );
      });
    });
  }

  changeStatoPrenotazione(event: any) {
    if (event.code == this.reservation?.statoPrenotazione) {
      return;
    } else {
      this.reservation!.statoPrenotazione = event.code;
      this.grooomingService
        .edit(this.reservation!)
        .subscribe((reservations) => {
          // this.reservation = reservation;
          this.router.navigate(['private']);
        });
    }
  }

  deleteReservation(id: number) {
    this.grooomingService.delete(id).subscribe({
      next: (reservations) => {
        console.log(reservations);
        this.router.navigate(['private']);
      },
    });
  }
}
