import { Component } from '@angular/core';
import { Reservation, STATO_PRENOTAZIONE, TIPO_ANIMALE } from '../../models/reservation.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GroomingService } from '../../services/grooming/grooming.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-prenotazioni',
  templateUrl: './prenotazioni.component.html',
  styleUrls: ['./prenotazioni.component.scss'],
  providers: [MessageService],
})
export class PrenotazioniComponent {
  tipoAnimaleToSelect = [
    { name: TIPO_ANIMALE.CANE, code: TIPO_ANIMALE.CANE },
    { name: TIPO_ANIMALE.GATTO, code: TIPO_ANIMALE.GATTO },
  ];

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly groomingService: GroomingService,
    private messageService: MessageService
  ) {}
  ngOnInit(): void {}
  prenotazioniForm: FormGroup = this.formBuilder.group({
    nome: [''],
    cognome: [''],
    tipoAnimale: [null],
    nomeAnimale: [''],
    date: [null],
    statoPrenotazione: [STATO_PRENOTAZIONE.TODO],
    noteGroomer: [''],
  });

  createPrenotazione() {
    console.log(this.prenotazioniForm.value);
    const reservation = new Reservation(this.prenotazioniForm.value);
    this.groomingService.save(reservation).subscribe({
      next: (value) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Prenotazioni creata!',
          detail: 'Potrai vedere le prenotazioni una volta loggato',
        });
      },
    });
  }
}
