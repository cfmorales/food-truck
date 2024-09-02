# FoodTruck Task

This task is made in React in the FE and Laravel in the BE
## Installation BE

Requirements

php >= 8.2

mysql 8

composer 2.7.8

```bash
cd BE
composer install
```

In the .env file, we edit the database properties to match yours

then we can run the migrations with the command

```bash
php artisan migrate
php artisan serve
```

The last command will return the URL where the server is running, and save it to use in the FE settings


## Installation FE

You need to have npm installed and then run

```bash
cd fe
npm install
```
There is a .env file where we need to add the current URL where our BE server is running

## Usage

```javascript
npm run start
```

## Application content

There are 2 pages, the first one (Home), expects to start with the CSV file that is added to this repository, it uploads all the content in the database so it is available to be returned to the FE

The second page can be used to return the key that is found in the column food_items, we can use it to return all food trucks that offer Burgers for example.

As the intention of the task is to try to complete as much as I can in 3 hours, having to work on the FE and BE at the same time doesn't give us enough time to add more features. But if I had more time, I would add a way to keep in cache the responses that are returned by the BE so it is not triggered again when we switch tabs, also I would improve the pagination in the FE, and refactor the styling so it can look better, also I can add a modal to see the entire info returned for each food truck and would love to implement the google maps API to show the exact location and to show the nearest food trucks depending on my area. 