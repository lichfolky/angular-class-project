import { Component } from '@angular/core';

@Component({
  selector: 'app-aloisi-matteo-form',
  templateUrl: './aloisi-matteo-form.component.html',
  styleUrls: ['./aloisi-matteo-form.component.css']
})
export class AloisiMatteoFormComponent {
  paymentType: string = 'unMese'
  paymentValue: string = '5';
  paymentMethod: string = 'bank';
  email!: string;

  myForm = {}

  onClick() {
    // I valori vengono inviati da qualche parte qui

    this.myForm = {
      tipoPagamento: this.paymentType,
      valorePagamento: this.paymentValue,
      metodoPagamento: this.paymentMethod,
      email: this.email
    }
    console.log(this.myForm);
    // nome.emit(myForm);
  }
}
