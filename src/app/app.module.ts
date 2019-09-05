import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { environment } from 'src/environments/environment';
import { HandbagsComponent } from './handbags/handbags.component';
import { CrossbodyComponent } from './crossbody/crossbody.component';
import { ProductsComponent } from './products/products.component';
import { StoriesComponent } from './stories/stories.component';
import { FotograficaComponent } from './products/fotografica/fotografica.component';
import { ClassicFlapComponent } from './products/classic-flap/classic-flap.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    HomeComponent,
    AboutComponent,
    HandbagsComponent,
    CrossbodyComponent,
    ProductsComponent,
    StoriesComponent,
    FotograficaComponent,
    ClassicFlapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
