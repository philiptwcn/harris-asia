import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})



export class NavbarComponent implements OnInit {

  constructor(public auth: AuthService) { }

  @ViewChild('navBurger', {static: true}) navBurger: ElementRef;
  @ViewChild('navMenu', {static: true}) navMenu: ElementRef;
  @ViewChild('dropDown', {static: true}) dropDown: ElementRef;

  ngOnInit() {
  }


  toggleNavbar() {
      this.navBurger.nativeElement.classList.toggle('is-active');
      this.navMenu.nativeElement.classList.toggle('is-active');
  }

  closeNavbar() {
    this.navBurger.nativeElement.classList.toggle();
    this.navMenu.nativeElement.classList.toggle();
  }

  closeDropDown() {
    this.dropDown.nativeElement.classList.toggle('is-active');
  }


}
