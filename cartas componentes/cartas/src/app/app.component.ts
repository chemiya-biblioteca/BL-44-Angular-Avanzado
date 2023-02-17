import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = [
    { "id": 0, "status": "Available",name:"chema" },
    { "id": 1, "status": "Ready",name:"fernando" },
    { "id": 2, "status": "Started",name:"rodrigo" }
];
}
