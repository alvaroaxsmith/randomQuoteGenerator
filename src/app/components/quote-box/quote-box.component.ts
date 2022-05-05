import { Component } from '@angular/core';
import { QuoteService } from '../../services/quote.service';
import { Quote } from '../../models/quote.class';

@Component({
  selector: 'app-quote-box',
  templateUrl: './quote-box.component.html',
  styleUrls: ['./quote-box.component.css']
})
export class QuoteBoxComponent {
  public quote = new Quote('', '', '');

  constructor(public quoteService: QuoteService) {
    this.getQuote();
  }

  public getQuote() {
    this.quoteService.getRandomQuote().subscribe((data: Quote) => {
      this.quote = new Quote(data.frase, data.autor, data.livro);
    });
  }

}