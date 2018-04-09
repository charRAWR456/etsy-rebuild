import { Injectable } from '@angular/core';
import { Item } from './item.model';
import { ITEMS } from './mock-items';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ItemService {
  items: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.items = database.list('items');
  }

  getItems() {
      return this.items;
    }

    addItem(newItem: Item) {
    this.items.push(newItem);
  }

    getItemsById(itemId: string){
 return this.database.object('items/' + itemId);
 }

 updateItem(localUpdatedItem){
  var itemEntryInFirebase = this.getItemsById(localUpdatedItem.$key);
  itemEntryInFirebase.update({url: localUpdatedItem.url,
                             title: localUpdatedItem.title,
                              shopName: localUpdatedItem.shopName,
                              description: localUpdatedItem.description,
                            price: localUpdatedItem.price});
}

deleteItem(localItemToDelete){
    var itemEntryInFirebase = this.getItemsById(localItemToDelete.$key);
    itemEntryInFirebase.remove();
  }
}
