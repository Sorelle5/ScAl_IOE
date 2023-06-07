import {Component, Injector} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'etiquetteTest';
  constructor(private injector: Injector) {
    this.title = this.injector.get('A');
  }
}
