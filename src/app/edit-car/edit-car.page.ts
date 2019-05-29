import { FirebaseService } from './../firebase.service';
import { CarInterface } from './../models/carInterface';
import { CarClass } from './../models/carClass';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.page.html',
  styleUrls: ['./edit-car.page.scss'],
})
export class EditCarPage implements OnInit {

  car: CarInterface;
  idCar: string;


  constructor(public activatedRoute: ActivatedRoute, private firebase: FirebaseService, private router: Router, private navControler: NavController) {
    this.activatedRoute.params.subscribe(param => {
      this.car =  <CarInterface>param;
      this.idCar = param.id;
      console.log(this.car);
    });
   }



   updateCar(form){
    var formValues: CarInterface = form.value;

    var newCar = new CarClass(this.car.id, this.car.fabricacion, this.car.marca, this.car.maxspeed, this.car.modelo, this.car.potencia);
    console.log("New car to edit");
    console.log(newCar);
    
    console.log("Datos del formulario: ");
    console.log(formValues);
  
    console.log("COMPARANDO VALORES NUEVOS");
    
    if (formValues.fabricacion != null) {
      var newfabricacion = <string>formValues.fabricacion;
      if (newfabricacion !== this.car.fabricacion && newfabricacion.length > 2) {
        console.log("Cambia pais");
        newCar.$fabricacion = newfabricacion;
        console.log(newCar.$fabricacion);
      }
    }

    if (formValues.marca != null) {
      var newmarca = <string>formValues.marca;
      if (newmarca !== this.car.marca && newmarca.length > 2) {
        console.log("Cambia marca");
        newCar.$marca = newmarca;
        console.log(newCar.$marca);
      }
    }

    if (form.value.maxspeed == "") {
      console.log("Empty year");
    } else {
      if (formValues.maxspeed != null || form.value.maxspeed) {
        var newmaxspeed = <number>formValues.maxspeed;
        if (newmaxspeed !== this.car.maxspeed) {
          console.log("Cambia maxspeed");
          newCar.$maxspeed = newmaxspeed;
          console.log(newCar.$maxspeed);
        }
      }
    }

    if (formValues.modelo != null) {
      var newmodelo = <string>formValues.modelo;
      if (newmodelo !== this.car.modelo && newmodelo.length > 2) {
        console.log("Cambia modelo");
        newCar.$modelo = newmodelo;
        console.log(newCar.$modelo);
      }
    }

    if (form.value.potencia == "") {
      console.log("Empty potencia");
    } else{
      if (formValues.potencia != null || form.value.potencia) {
        var newpotencia = <number>formValues.potencia;
        if (newpotencia !== this.car.potencia) {
          console.log("Cambia potencia");
          console.log(newpotencia);        
          newCar.$potencia = newpotencia;
        }
      }
    }

    console.log("Object to been sent");
    var data = {
      id: newCar.$id,
      fabricacion: newCar.$fabricacion,
      marca: newCar.$marca,
      modelo: newCar.$modelo,
      potencia: newCar.$potencia,
      maxspeed: newCar.$maxspeed
    }

    console.log(data);
    form.reset();
    this.firebase.updateCar(this.car.id, data);
  }


  goHome(){
    this.navControler.back();
  }


   deleteCar(){
     this.firebase.deleteCar(this.car.id);
   }
  

  ngOnInit() {
  }

}
