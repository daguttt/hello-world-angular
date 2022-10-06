import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  img: string = `https://thecatapi.com/api/images/get?format=src&type=gif&results_per_page=`;
}
