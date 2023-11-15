import { Component } from '@angular/core';
import { ChuckNorrisService } from '../service/chuck-norris.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent {
  randomJoke : any = {};
  errore : string = "";
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

constructor(private service : ChuckNorrisService){
  this.getRandom()
}
getRandom(){
  this.service.getRandom().subscribe((r)=>{
    this.randomJoke = r},
  (er)=>{this.errore})
}
onSlide() {
 this.getRandom()
}
}
