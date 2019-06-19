import { CarInterface } from './models/carInterface';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  userId: string = null;
  $user: Observable<any>;

  constructor(private firestore: AngularFirestore, private toastController: ToastController, private afAuth: AngularFireAuth, private angularRouter: Router) {
    // this.afAuth.auth.signInAnonymously().catch(function(error) {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    
    //   if (errorCode === 'auth/operation-not-allowed') {
    //     alert('You must enable Anonymous auth in the Firebase Console.');
    //   } else {
    //     console.error(error);
    //   }
    // });
    

    firestore.firestore.enablePersistence()
    .catch(function(err) {
      if (err.code == 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
          var errorType = "Multiple tabs open, persistence can only be enabled in one tab at a a time.";
          console.log(errorType);
          const toast =  this.toastController.create({
            message: (errorType),
            duration: 1000,
            position: 'bottom',
          });
          toast.present();
          
      } else if (err.code == 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
          var errorType = "The current browser does not support all of the features required to enable persistence";
          console.log(errorType);
          const toast =  this.toastController.create({
            message: (errorType),
            duration: 1000,
            position: 'bottom',
          });
          toast.present();
      }
    });
  }


  getCars(): Observable<any>{
    return this.firestore.collection('cars').snapshotChanges();
  }



  saveCarToDB(car) {
    // this.afAuth.authState.subscribe(user => {
    //   if(user){
    //     console.log("user loged");
    //     this.userId = user.uid;
    //     return this.firestore.collection(`users`).doc(`${this.userId}`).collection("cars").add(car).then(
    //       res => {
    //         console.log("RESPUESTA");
    //         console.log(res);
    //         var action = "Added"
    //         this.presentToast(action)
            
    //       },
    //       err =>{
    //         console.log("ERROR");
    //         console.log(err);
    //         var action = "Error"
    //         this.presentToast(action)        
    //       }
    //     );
    //   } else {
    //     this.presentToast("You need to login");
    //   }
    // })

    return this.firestore.collection(`cars`).add(car).then(
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

  async login(): Promise<boolean> {
    var logedIn: boolean = false;
    return await this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(function(credential){
      if (credential){
        // this.userId = credential.user.uid;   
        console.log("Loged in");
        logedIn = true
        return true;
      } else {
        console.log("Login Failed");  
        return false
      }
    }, function (error){
      // The provider's account email, can be used in case of
      // auth/account-exists-with-different-credential to fetch the providers
      // linked to the email:
      var email = error.email;
      // The provider's credential:
      var credential = error.credential;
      // In case of auth/account-exists-with-different-credential error,
      // you can fetch the providers using this:
      return false;
      console.log(error);
    });
  }

  async loginEmail(email: string, password: string): Promise<boolean> {
    var logedIn: boolean = false;
    //var toastController: ToastController= new ToastController(this.toastController.getDoc());

    return this.afAuth.auth.signInWithEmailAndPassword(email, password).then(function(credential){
      if (credential){
        // this.userId = credential.user.uid;   
        console.log("Loged in");
        logedIn = true
        return true;
      } else {
        console.log("Login Failed");  
        return false
      }
    }, async function (error){
      // The provider's account email, can be used in case of
      // auth/account-exists-with-different-credential to fetch the providers
      // linked to the email:
      var email = error.email;
      // The provider's credential:
      var credential = error.credential;
      // In case of auth/account-exists-with-different-credential error,
      // you can fetch the providers using this:
      if(error.code == "auth/user-not-found"){
       
      }
      
      return false;
      console.log(error);
    });
  }

  logout() {
    this.afAuth.auth.signOut();
  }


  createUser(email, password): Promise<boolean> {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(function(credential){          
          return (credential) ? true : false;
        })
        .catch(error => {
          console.log(error);
          return false} );
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
