import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HeaderCategoriesComponent } from './header/header-categories/header-categories.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import {MatDialogModule} from '@angular/material/dialog';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CarPickerComponent } from './car-picker/car-picker.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      HomeComponent,
      HeaderCategoriesComponent,
      FooterComponent,
      SidebarComponent,
      CarPickerComponent,
      ProductDetailsComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      MatSidenavModule,
      MatDividerModule,
      RouterModule,
      MatDialogModule,
      MatMenuModule,
      MatButtonModule,
      MatIconModule,
      MatListModule,
      MatToolbarModule,
      MatCardModule,
      FlexLayoutModule,
      MatPaginatorModule,
      MatTableModule,
      BrowserAnimationsModule,
      FontAwesomeModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {
}
