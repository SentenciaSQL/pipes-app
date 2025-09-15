import {Component, effect, inject, LOCALE_ID, signal} from '@angular/core';
import {DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe} from '@angular/common';
import {AvailableLocale, LocaleService} from '../../service/locale.service';

@Component({
  selector: 'app-basic-page',
  imports: [
    LowerCasePipe,
    UpperCasePipe,
    TitleCasePipe,
    DatePipe
  ],
  templateUrl: './basic-page.component.html',
  styles: ``
})
export default class BasicPageComponent {

  localeService = inject(LocaleService);
  currentLocale = signal(inject(LOCALE_ID));

  nameLower = signal('andres');
  nameUpper = signal('ANDRES');
  fullName = signal('anDrEs fRiAs');

  customDate = signal(new Date());

  tickingDateEffect = effect((onCleanup) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date());
    }, 1000);

    onCleanup(() => {
      clearInterval(interval);
    })
  })

  changeLocale(locale:  AvailableLocale) {
    console.log('Changing locale to', locale);
    this.localeService.changeLocale(locale);
  }
}
