import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-notfound',
    templateUrl: './notfound.component.html',
})
export class NotfoundComponent { 


    constructor(private route: Router){
        route.events.subscribe({
        next : (r) => {
            console.log(r);
            
        }
        })
        
    }
}

