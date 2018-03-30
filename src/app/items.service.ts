import { Injectable } from '@angular/core';
import { Item } from './item.model';
import { ITEMS } from './mock-items';

@Injectable()
export class ItemService {

  constructor() { }

  getItems() {
      return ITEMS;
    }

    getItemsById(itemId: number){
   for (var i = 0; i <= ITEMS.length - 1; i++) {
     if (ITEMS[i].id === itemId) {
       return ITEMS[i];
     }
   }
 }
}
