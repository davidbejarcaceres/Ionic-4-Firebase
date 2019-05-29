import { CarInterface } from './models/carInterface';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore, private toastController: ToastController) {

  }


  getCars(): Observable<any>{
    return this.firestore.collection('cars').snapshotChanges();
  }



  saveCarToDB(car) {
    return this.firestore.collection('cars').add(car).then(
      res => {
        console.log("RESPUESTA");
        console.log(res);
        var action = "Added"
        this.presentToast(action)
        
      },
      err =>{
        console.log("ERROR");
        console.log(err);
        var action = "Error"
        this.presentToast(action)        
      }
    );
  };

  updateCar(carID,car){
    this.firestore.collection('cars').doc(carID).update(car).then(
      res => {
        console.log("RESPUESTA");
        console.log(res);
        var action = "Updated"
        this.presentToast(action)  
        
      },
      err =>{
        console.log("ERROR");
        console.log(err);
        var action = "Error"
        this.presentToast(action)  
        

      }
    );
  }

  deleteCar(car_id) {
    this.firestore.collection('cars').doc(car_id).delete().then(
      res => {
        console.log("RESPUESTA");
        console.log(res);
        var action = "Deleted"
        this.presentToast(action)  
        
      },
      err =>{
        console.log("ERROR");
        console.log(err);
        var action = "Error"
        this.presentToast(action)          
      }
    );
  }




  async presentToast(action: string) {
    const toast = await this.toastController.create({
      message: (action),
      duration: 1000,
      position: 'bottom',
    });
    toast.present();
  }


}
