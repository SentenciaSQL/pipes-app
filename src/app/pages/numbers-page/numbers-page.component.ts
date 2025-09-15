import {Component, signal} from '@angular/core';
import {CurrencyPipe, DecimalPipe, PercentPipe} from '@angular/common';

@Component({
  selector: 'app-numbers-page',
  imports: [
    DecimalPipe,
    PercentPipe,
    CurrencyPipe
  ],
  templateUrl: './numbers-page.component.html',
  styles: ``
})
export default class NumbersPageComponent {
  totalSells = signal(2_567_789.5567);
  percentage = signal(0.4856);
}
