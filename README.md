# Shopping List React App

This is a simple shopping list app which allows you to stay organized when creating a todo list for shopping. You can add items, sort them by name or price, mark them done and store all this information directly on your web browser.

## How to use it 
When you use the list for the first time it will show you the instructions:

![The screenshot of the main page with instructions](https://github.com/FeNatalia/shopping-list-app/blob/main/src/assets/screenshots/welcome.jpg)

When you click `Add item` button, the form with two fields (name and price) will appear, fill in these fields and click `Ok` :

![The screenshot of the main page with the form](https://github.com/FeNatalia/shopping-list-app/blob/main/src/assets/screenshots/form.jpg)

If you don't provide one of the fields it will give you an error alert:

![The screenshot of an alert missing field ](https://github.com/FeNatalia/shopping-list-app/blob/main/src/assets/screenshots/alertMissing.jpg)

If you write `0` or a negative number in the price field, it will also give you a warn:

![The screenshot of an alert wrong type ](https://github.com/FeNatalia/shopping-list-app/blob/main/src/assets/screenshots/alertNum.jpg)

After successfully submitting your shopping items, you will see the items appear on your shopping list: 

![The screenshot of an unsorted list](https://github.com/FeNatalia/shopping-list-app/blob/main/src/assets/screenshots/unsorted.jpg)

If you would like to sort the items by name, click `Name` and it will sort from A to Z:

![The screenshot of a sorted by name list](https://github.com/FeNatalia/shopping-list-app/blob/main/src/assets/screenshots/sortName.jpg)

If you would like to sort the items by price, click `Price` and it will sort from 0 up: 

![The screenshot of a sorted by price list](https://github.com/FeNatalia/shopping-list-app/blob/main/src/assets/screenshots/sortPrice.jpg)

When you want to mark the items done, click the checkbox by your item and it will now appear on the `View completed items` list, click it to view: 

![The screenshot of completed items](https://github.com/FeNatalia/shopping-list-app/blob/main/src/assets/screenshots/completed.jpg)

When you click on `Add` button it will either show or hide the form. The same logic with the `View completed items`, click to hide or view: 

![The screenshot of toggled buttons ](https://github.com/FeNatalia/shopping-list-app/blob/main/src/assets/screenshots/toggled.jpg)

The website supports both mobile and desktop versions.

## How to start 

You need to have npm installed on your computer. In the project terminal first run:

### `npm install`

It would compile the project before you would run it. After this go to the next step:

### `npm start`

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

## Diagram

The diagram/component tree of the project structure: 

(https://github.com/FeNatalia/shopping-list-app/blob/main/src/assets/diagram/ComponentTree.png)

## Link

EIKA is hosted on: https://shopping-list-eika.web.app

