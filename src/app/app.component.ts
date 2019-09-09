import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  member: any[];

  constructor(db: AngularFireDatabase) {
    db.list('/members')
    .snapshotChanges().subscribe(members => {
        this.member = members;
        console.log(this.member);
      });
  }
}
