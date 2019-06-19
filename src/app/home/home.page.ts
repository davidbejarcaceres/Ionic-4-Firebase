import { CarClass } from './../models/carClass';
import { CarInterface } from './../models/carInterface';
import { FirebaseService } from './../firebase.service';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { delay } from 'q';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cars: any

  constructor(private firebaseService:  FirebaseService) {

  }

  ionViewWillEnter() {
    this.firebaseService.getCars().subscribe(data => {

      this.cars = data.map(e => {
        return {
          id: e.payload.doc.id,
          fabricacion: e.payload.doc.data()['fabricacion'],
          marca: e.payload.doc.data()['marca'],
          modelo: e.payload.doc.data()['modelo'],
          potencia: e.payload.doc.data()['potencia'],
          maxspeed: e.payload.doc.data()['maxspeed'],
        };
      })
      console.log(this.cars);
    })
  }


  ngOnInit() {
  }

  logout(){
    this.firebaseService.logout();
  }

}
