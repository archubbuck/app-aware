import { Component } from '@angular/core';
import { Landing } from './components/landing/landing';

@Component({
  selector: 'app-root',
  imports: [Landing],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
