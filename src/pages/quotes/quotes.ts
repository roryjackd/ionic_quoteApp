import { Component, OnInit } from '@angular/core';

import { AlertController } from "ionic-angular";
import { NavParams } from "ionic-angular";
import { Quote } from "../../data/quote/quote.interface";

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {
  quoteGroup: {category: string, quotes: Quote[], icon: string};

 constructor(
   private navParams: NavParams,
   private alertCtrl: AlertController) {}

 ngOnInit() {
   this.quoteGroup = this.navParams.data;
 }

 // ionViewDidLoad(){
 //   this.quoteGroup = this.navParams.data;
 // }

 onAddToFavorite(selectedQuote: Quote){
   const alert = this.alertCtrl.create({
     title: 'Add Quote',
     subtitle: 'Are you sure?',
     message: 'Are you sure you want to add the quote?',
     buttons: [
       {
         text: 'Yes, go ahead',
         handler: () => {
           console.log('Ok');
         }
       },
       {
         text: 'No, I changed my mind!',
         role: 'cancel',
         handler: () => {
           console.log('Cancelled!');
         }
       }
     ]
   });

   alert.present();
 }
}
