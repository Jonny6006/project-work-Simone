// Modellizzare un oggetto prenotazione
// (id,nome, cognome, tipoAnimale (cane|gatto), nomeAnimale, Date della prenotazione, statoPrenotazione (done, todo, doing), noteGroomer

export enum TIPO_ANIMALE {
  CANE = 'cane',
  GATTO = 'gatto',
}

export enum STATO_PRENOTAZIONE {
  DONE = 'done',
  TODO = 'todo',
  DOING = 'doing',
}

export interface IReservation {
  id: number;
  nome: string;
  cognome: string;
  tipoAnimale: TIPO_ANIMALE;
  nomeAnimale: string;
  date: Date;
  statoPrenotazione: STATO_PRENOTAZIONE;
  noteGroomer: string;
}

export class Reservation {
  id: number;
  nome: string;
  cognome: string;
  tipoAnimale: TIPO_ANIMALE;
  nomeAnimale: string;
  date: Date;
  statoPrenotazione: STATO_PRENOTAZIONE;
  noteGroomer: string;
  constructor(configObj: IReservation) {
    this.id = configObj.id;
    this.nome = configObj.nome;
    this.cognome = configObj.cognome;
    this.tipoAnimale = configObj.tipoAnimale;
    this.nomeAnimale = configObj.nomeAnimale;
    this.date = configObj.date;
    this.statoPrenotazione = configObj.statoPrenotazione;
    this.noteGroomer = configObj.noteGroomer;
  }

  changeStatoPrenotazione(statoPrenotazione: STATO_PRENOTAZIONE) {
    this.statoPrenotazione = statoPrenotazione;
  }

  setId(id: number) {
    this.id = id;
  }
}
