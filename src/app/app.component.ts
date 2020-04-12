import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  
  @ViewChild('sidenav') public sidenav: MatSidenav;
  
  ngOnInit(): void {
    
  }

  sideBartToogler($event){
    this.sidenav.toggle();
  }

}
