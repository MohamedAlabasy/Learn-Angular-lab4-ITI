import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    AboutComponent,
    HomeComponent,
    ProductListComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    AboutComponent,
    HomeComponent,
    ProductListComponent,
    FooterComponent,
  ]
})
export class CoreModule { }
