import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})



export class NavbarComponent implements OnInit {

  constructor() { }
  @ViewChild('navBurger', {static: true}) navBurger: ElementRef;
  @ViewChild('navMenu', {static: true}) navMenu: ElementRef;

  ngOnInit() {
  }


    toggleNavbar() {
        this.navBurger.nativeElement.classList.toggle('is-active');
        this.navMenu.nativeElement.classList.toggle('is-active');
    }


}
