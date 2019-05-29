import { Component, OnInit } from '@angular/core';
import { CarInterface } from '../models/carInterface';
import { CarClass } from '../models/carClass';
import { FirebaseService } from '../firebase.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.page.html',
  styleUrls: ['./add-car.page.scss'],
})
export class AddCarPage implements OnInit {

  constructor(private firebase: FirebaseService, private navControler: NavController) { }

  ngOnInit() {
  }


  addCar(form){

    var formValues: CarInterface = form.value;

    var newCar = new CarClass(formValues.id, formValues.fabricacion, formValues.marca, formValues.maxspeed, formValues.modelo, formValues.potencia);

    console.log("Object to been sent");
    var data = {
      fabricacion: newCar.$fabricacion,
      marca: newCar.$marca,
      modelo: newCar.$modelo,
      potencia: newCar.$potencia,
      maxspeed: newCar.$maxspeed
    }

    console.log(data);
    form.reset();
    this.firebase.saveCarToDB(data);
  }

  goHome(){
    this.navControler.back();
  }

}
