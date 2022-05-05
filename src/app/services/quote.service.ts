import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quote } from '../models/quote.class';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(public http: HttpClient) { }

  public getRandomQuote(): Observable<Quote> {
    return this.http.get<Quote>('https://allugofrases.herokuapp.com/frases/random')
  }
}
