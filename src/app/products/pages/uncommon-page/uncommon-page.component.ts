import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //i8n Select
  public name: string = 'Unai';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }


  cangeClient() {
    this.name = 'Melisa';
    this.gender = 'female';
  }

  //I15nPlura
  public clients: string[] = ['Maria','Unai','Pedro','Juan','Fernando','Alberto'];
  public clientsMap = {
    '=0': 'no tenemos clientes esperando.',
    '=1': 'tenemos un cliente esperando ',
    '=2': 'tenemos 2 personas esperando ',
    'other': 'tenemos # clientes esperando ',
  }

  deleteClient(){
    this.clients.shift();
  }

  //json y KeyValue Pipe
  public person = {
    name: 'Unai',
    age: 36,
    adress: 'Otawa-Canada'
  }

  //ASYNC PIPE
  public myObservableTimer:Observable<number> = interval(2000)
    .pipe(
      tap( value => console.log('tap:', value) )
    );

  public promiseValue:Promise<string> = new Promise ( (resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
      console.log('Tenemos data en la promesa');
    });
  } )


}
