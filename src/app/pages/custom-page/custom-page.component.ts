import {Component, signal} from '@angular/core';
import {ToggleCasePipe} from '../../pipes/toggle-case.pipe';
import {heroes} from '../../data/heroes.data';
import {CanFlyPipe} from '../../pipes/can-fly.pipe';
import {HeroColorPipe} from '../../pipes/hero-color.pipe';
import {HeroTextColorPipe} from '../../pipes/hero-text-color.pipe';
import {TitleCasePipe} from '@angular/common';
import {HeroCreatorPipe} from '../../pipes/hero-creator.pipe';
import {HeroSortByPipe} from '../../pipes/hero-sort-by.pipe';
import {Hero} from '../../interfaces/hero.interface';
import {HeroFilterPipe} from '../../pipes/hero-filter.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe, CanFlyPipe, HeroColorPipe, HeroTextColorPipe, TitleCasePipe, HeroCreatorPipe, HeroSortByPipe, HeroFilterPipe],
  templateUrl: './custom-page.component.html',
  styles: ``
})
export default class CustomPageComponent {

  name = signal('Fernando Herrera');
  heroes = signal(heroes);
  upperCase = signal(true);
  sortBy = signal<keyof Hero | null>(null);
  searchQuery = signal('')

  changeCase() {
    this.upperCase.set(!this.upperCase());
  }

}
