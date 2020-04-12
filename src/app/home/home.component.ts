import { Component, OnInit, HostListener} from '@angular/core';
import { faSearch,faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //sideBarOpen = false;
  constructor() { }

  ngOnInit() {
  }
  faSearch = faSearch;
  faCart = faShoppingCart;
  /*sideBartToogler($event){
    this.sideBarOpen=!this.sideBarOpen;
  }*/
}
