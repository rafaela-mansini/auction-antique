# Auction Antique Project
This project is an MVP of an antiques auction. It is responsible for listing the products in the database and bidding on a product.

## Techs

Those were the technologies used:

- [PHP 7.2] - https://www.php.net
- [Laravel 7] - https://laravel.com/docs/7.x
- [Javascript] - https://developer.mozilla.org/en-US/docs/Web/JavaScript
- [React.js] - https://reactjs.org/
- [Composer] - https://getcomposer.org/
- [MySql] - https://www.mysql.com/

## Features

- Basic login and logout;
- List the products of database;
- Makes a filter by name/description and for initial bid price;
- List product detail;
- Makes a bid to the product;
- Automatic bids;

## Requirements
- Server side: PHP (7.2) | Database relational (recomend MySql) | Composer | Apache (server to run PHP);
- Client side: Javascript navigator (recomends Google Chrome) | Yarn;

## Installation
Clone this repository and make sure that the items on requirements section it's installed on your machine;
- ### SERVER SIDE:
   To install the packages open the folder api and in your terminal:
    ```
    composer install
    ```
    Inside your project, rename the `.env.example` to `.env` and configure the database keys to set your database: (https://laravel.com/docs/7.x/configuration#environment-configuration) and in your terminal:
    ```
    php artisan key:generate
    php artisan storage:link
    ```
    And start your server: 
    ```
    php artisan serve
    ```
    **NOTE:** To your client side running, it's necessary the server side is running to (make sure the `php artisan serve` it's running and the port is `http://127.0.0.1:8000`)
- ### CLIENT SIDE:
    To install the packages, open the folder application and in your terminal:
    ```
    yarn
    ```
    To start your project:
    ```
    yarn start
    ```
    This command will open your browser on link: http://localhost:3000 (if is not open, copy and paste in your browser the link: `http://localhost:3000`)
    **NOTE:** This systems has a job to check a logic to automate the bid, to the Job works correctly, define in your `.env` the queues with synchronus time `QUEUE_CONNECTION=sync` or if your want insert this Job on a queue follow the documentation steps to listen the worker (https://laravel.com/docs/7.x/queues).
    
## Know improvments
To better the system, some features needs to be implemented:
- Insert a paginate on products page (show 10 itens per page);
- Make an expired time counter for product bid;
- Implements unit tests;
- 
## License and credits

MIT
**Free Software**
Code made by Rafaela Mansini [Github](https://github.com/rafaela-mansini) [LinkedIn](https://www.linkedin.com/in/rafaela-mansini/?locale=en_US)
