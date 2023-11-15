import { Component } from '@angular/core';
import { ChuckNorrisService } from '../service/chuck-norris.service';


@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss'],
 
})
export class CategorieComponent {
  
  categorie: string[] = [];
  errore: string = "";
  closeResult: string = "";
  joke: any;
  show = false;


  constructor( private serviceChuckNorris: ChuckNorrisService,
    
){
      this.getElenco()
  }

  getElenco() {
    this.serviceChuckNorris.getElenco().subscribe(
      (r: any) => {
        this.categorie = r;
      },
      (err: any) => {
        this.show = true;
        this.errore = err;
      }
    )

  }
  /*open(content: any, categoria: string) {
    this.modalService.open(content);
    this.getCategoryJokes(categoria);

  }*/

  getCategoryJokes(categoria: string) {
    return this.serviceChuckNorris.getRandomCategories(categoria).subscribe(
      (r: any) => {
        this.joke = r;
      },
      (err: any) => {
        this.errore = err;
      }
    )
  }
 // showTopCenter() {
 //   this.messageService.add({ key: 'tc', severity: 'warn', summary: 'Warn', detail: 'Message Content' });
//}

}
