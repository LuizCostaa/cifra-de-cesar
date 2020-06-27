import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  obj: any = {
    texto: '',
    chave: ''
  };

  constructor() { }

  onSubmit(form): void {
    console.log(form);
  }
}
