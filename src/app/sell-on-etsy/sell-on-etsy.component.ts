import { Component, OnInit } from '@angular/core';
import { Item } from '../item.model';
import { ItemService } from '../items.service';

@Component({
  selector: 'app-sell-on-etsy',
  templateUrl: './sell-on-etsy.component.html',
  styleUrls: ['./sell-on-etsy.component.css'],
  providers: [ItemService]
})
export class SellOnEtsyComponent implements OnInit {

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  submitForm(url: string, title: string, shopName:string, description: string, price: string) {
     var newItem: Item = new Item(url, title, shopName, description, price);
     this.itemService.addItem(newItem);

}
}
