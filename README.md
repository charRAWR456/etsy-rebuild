# Jamie Pittak's Etsy Rebuild
#### Weeks 13-14 project for Epicodus

### By Jamie Pittak

## Description
This webpage is a rebuild of the "Shop, Create & Be  Inspired" website Etsy. I chose to rebuild this site for practice with Typescript, Bootstrap and the Angular framework for weeks thirteen and fourteen "Javascript-Angular" of Epicodus.

## Setup
1. Go to https://etsy-rebuild.firebaseapp.com/

OR

1. Make sure you have Angular, Node.js and npm installed
2. Clone this repository
3. Open project in editor of your choice
4. Create file src/app/api-keys.ts
5. go to firebase to retrieve the below information
          apiKey: "xxxx",
          authDomain: "xxxx.firebaseapp.com",
          databaseURL: "https://xxxx.firebaseio.com",
          storageBucket: "xxxx.appspot.com",
          messagingSenderId: "xxxx"
6. paste this information in your api-key.ts
          export var masterFirebaseConfig = {

          ...

          };
7. import database file located in project folder to firebase
8. type npm install in your terminal
9. After npm install is finished, type ng serve -o
10. this should automatically open http://localhost:4200/

## Known Bugs
1. Sign in button is not functional
2. Search/ Filter is not functional
3. 2nd nav bar needs drop downs and functionality
4. Register is not functional
5. no ability to add to cart

## Specifications
1. User can click on items to view more information
2. User can click Etsy logo to route back to main page
3. User can add a new item by going to Sell on Etsy
4. User can delete item on sell on Etsy
5. User can edit an item for sale using the sell on Etsy link

## Technologies Used
* Typescript
* Angular
* Firebase
* HTML
* CSS
* Bootstrap

## Legal
Copyright (c) 2018 Jamie Laurelann Pittak
