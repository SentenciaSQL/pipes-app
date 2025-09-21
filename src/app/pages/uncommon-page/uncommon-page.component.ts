import {Component, signal} from '@angular/core';
import {CardComponent} from '../../components/card/card.component';
import {
  AsyncPipe,
  I18nPluralPipe,
  I18nSelectPipe,
  JsonPipe,
  KeyValuePipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe
} from '@angular/common';
import {interval, tap} from 'rxjs';

const client1 = {
  name: 'Fernando',
  gender: 'male',
  age: 35,
  address: 'Ottawa, Canada'
}

const client2 = {
  name: 'Melissa',
  gender: 'female',
  age: 33,
  address: 'Toronto, Canada'
}

@Component({
  selector: 'app-uncommon-page',
  imports: [
    CardComponent,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe,
    UpperCasePipe,
    KeyValuePipe,
    TitleCasePipe,
    AsyncPipe
  ],
  templateUrl: './uncommon-page.component.html',
  styles: ``
})
export default class UncommonPageComponent {

  // i18nSelect
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  };

  changeClient(): void {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }

    this.client.set(client1);
  }

  // i18nPlural
  clientsMap = signal({
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos dos clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  })

  clients = signal(['Maria', 'Pedro', 'Juan', 'Ana', 'Fernando', 'Melissa', 'Diego', 'Karla', 'Laura', 'Sofia', 'Valentina']);

  deleteClient() {
    this.clients.update(prev => prev.slice(1));
  }

  // KeyValue Pipe
  profile = {
    name: 'Fernando',
    age: 35,
    address: 'Ottawa, Canada',
    hobbies: ['Cooking', 'Sports', 'Reading', 'Traveling']
  }

  // Async Pipe
  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa.');
      console.log('promesa finalizada');
    }, 3500);
  })

  myObservableTimer = interval(2000).pipe(
    tap((value) => console.log('tap:', value))
  )

}
