import { Component, OnInit } from '@angular/core';
import { QuoteModel } from '../quote-model';
import { QuotesService } from '../quotes.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  
  quotes:QuoteModel[] = []
  
  addNewQuote(quote:QuoteModel){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    // quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }


  toggleDetails(index:number){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

 

  deleteQuote(deletor: any, index: number){
    if (deletor) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].theQuote}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  constructor(private quotesService:QuotesService) { 
    
  }

  ngOnInit(): void {
    this.quotes = this.quotesService.getQuotes()
  }

}
