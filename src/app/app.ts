import { Component, signal } from '@angular/core';
import { MainCalculator } from './main-calculator/main-calculator';

@Component({
  selector: 'app-root',
  imports: [MainCalculator],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('extended-calculator');
}
