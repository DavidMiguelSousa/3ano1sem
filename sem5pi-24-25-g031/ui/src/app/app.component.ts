import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import './global-error-handler';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SARM G031 Web Application';
}