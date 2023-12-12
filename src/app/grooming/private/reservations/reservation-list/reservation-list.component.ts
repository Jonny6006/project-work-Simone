import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { STATO_PRENOTAZIONE } from 'src/app/grooming/models/reservation.model';
import { GroomingService } from 'src/app/grooming/services/grooming/grooming.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.scss']
})
export class ReservationListComponent {
  activeIndex: number = 0;
  visibleDetail: boolean = false;

  constructor(
    private readonly router: Router,
    private readonly groomingService: GroomingService
  ) {}

  reservationsTodoOrDoing$ = this.groomingService
    .getall()
    .pipe(
      map((reservations) =>
        reservations.filter(
          (reservation) =>
            reservation.statoPrenotazione === STATO_PRENOTAZIONE.TODO ||
            reservation.statoPrenotazione === STATO_PRENOTAZIONE.DOING
        )
      )
    );
  reservationsDone$ = this.groomingService
    .getall()
    .pipe(
      map((reservations) =>
        reservations.filter(
          (reservation) =>
            reservation.statoPrenotazione === STATO_PRENOTAZIONE.DONE
        )
      )
    );
  goToDetailFake() {
    this.router.navigate(['grooming','private', 'reservations', 'reservation'], {
      queryParams: {
        id: 99,
      },
    });
  }

  goToCreateFake() {
    this.router.navigate(['grooming','private', 'reservations', 'create']);
  }

  goToDetail(id: number) {
    this.router.navigate(['grooming','private', 'reservations', 'reservation'], {
      queryParams: { id },
    });
  }
}
