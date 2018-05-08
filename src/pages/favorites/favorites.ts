import { Component } from '@angular/core';

import { ModalController } from 'ionic-angular';

import { Quote } from "../../services/quotes";
import { QuotesService } from "../../services/quotes";
import { QuotePage } from "../quote/quote";

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes: Quote[];

  constructor (private quotesService: QuotesService,
               private modalCtrl: ModalController) {}

  ionViewWillEnter() {
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  onViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage);
    modal.present();
  }
}
