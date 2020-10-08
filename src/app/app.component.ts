import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  onSubmit(form): void {
    const texto: string = form.value.texto.toUpperCase();
    const chave: string = form.value.chave.toUpperCase();
    const resultOutput = [];

    [...texto].forEach((letter: string) => {
      resultOutput.push(this.calculateIndexOfAscii(letter.charCodeAt(0), chave.charCodeAt(0)));
    });

    console.log(resultOutput.join('').replace(';', ' '));
  }

  calculateIndexOfAscii(letter: number, asciiKeyIndex: number): string {
    asciiKeyIndex = asciiKeyIndex - 65;

    //console.log((letter - 65 + asciiKeyIndex) % 26);
    return String.fromCharCode((letter - 65 + asciiKeyIndex) % 26 + 65);
  }
}
