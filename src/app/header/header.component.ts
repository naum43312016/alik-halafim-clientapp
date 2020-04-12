import { Component, OnInit,Output, EventEmitter,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CarPickerComponent } from '../car-picker/car-picker.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  @Output() toggleSideBarForMe: EventEmitter<any>=new EventEmitter();

  ngOnInit() {
  }
  openDialog() {
    this.dialog.open(CarPickerComponent, {
    });
  }

  toggleSideBar(){
    this.toggleSideBarForMe.emit();
  }
}
