import { Component, OnInit } from '@angular/core';
import { Item } from '../item.model';
import { Router } from '@angular/router';
import { ItemService } from '../items.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ItemService]
})
export class HomeComponent implements OnInit {
  items: FirebaseListObservable<any[]>;

  constructor(private router: Router, private itemService: ItemService) { }

  ngOnInit() {
     this.items = this.itemService.getItems();
  }

  goToDetailPage(clickedItem) {
        this.router.navigate(['items', clickedItem.$key]);
      };

}
