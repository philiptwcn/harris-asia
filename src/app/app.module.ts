import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/modules/core.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { StoriesComponent } from './stories/stories.component';

import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { CarouselComponent } from './carousel/carousel.component';

import { AboutUsComponent } from './about/about-us/about-us.component';

import { ContentfulService } from './services/contentful.service';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    StoriesComponent,
    ProductDetailComponent,
    CarouselComponent,
    AboutUsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule,
    CoreModule,
  ],
  exports: [
  ],
  providers: [ContentfulService],
  bootstrap: [AppComponent]
})
export class AppModule { }
