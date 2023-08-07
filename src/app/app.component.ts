import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hemi2';
  constructor(private router:Router){}
  templat(){
this.router.navigate(['template']);
  }
  reacti(){
    this.router.navigate(['reactivo']);
      }
}
