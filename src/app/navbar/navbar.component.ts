import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})



export class NavbarComponent implements OnInit {

  items;

  constructor(
    public auth: AuthService,
    private cartService: CartService,
    ) { }

  @ViewChild('navBurger', {static: true}) navBurger: ElementRef;
  @ViewChild('navMenu', {static: true}) navMenu: ElementRef;
  @ViewChild('drop', {static: true}) drop: ElementRef;

  ngOnInit() {
    this.items = this.cartService.getItems();
  }


  toggleNavbar() {
    this.navBurger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
  }
  toggleDrop() {
    this.drop.nativeElement.classList.remove('is-active');
  }
  closeNavbar() {
    this.navBurger.nativeElement.classList.remove('is-active');
    this.navMenu.nativeElement.classList.remove('is-active');
  }


}
