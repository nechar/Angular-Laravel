# Angular and Laravel Together


### Key features

 * Non destructive Authentication in Laravel
 * Non destructive TS-Lint in Angular 
 * Angular Version 4.3
 * Laravel Version 5.5
 * Easy to setup
 * Laravel and Angular project seperated (Moduled)
 * Backend developer and frontend can work completely isolated from each other.

### Setup Angular Project:
Open a terminal or command prompt and go to angular-module
```sh
$ cd angular-module
```

Install node dependencies
```sh
$ npm install
```

Build the project into the public directory of laravel-module. (Don't miss the final slash)
```sh
$ ng build --base-href http://localhost:8000/app/
```

Run the angular server (Optional: required during development only)
```sh
$ ng serve
```

See check to see if it works in the browser (Optional: required during development only)

[http://localhost:4200](http://localhost:4200/)



### Setup Laravel Project:

Go to laravel-module
```sh
$ cd ../laravel-module
```

Install composer dependencies
```sh
$ composer install
```

Create an .env file and copy the contents of .env.example into it
```sh
$ cp .env.example .env
```


Change the database credentials of .env files
```
DB_DATABASE = your_database_name
DB_USERNAME = your_database_username
DB_PASSWORD = your_database_password
```

Generate application keys
```sh
$ php artisan key:generate
```

Run the database migration
```sh
$ php artisan migrate
```

Run the angular server
```sh
$ php artisan serve
```


See check to see if it works in the browser

[http://localhost:8000](http://localhost:8000/)


Create your first user from registration page

[http://localhost:8000/register](http://localhost:8000/register)


Congractulations have completed the project setup.
Every time you make any changes to the angular files, make sure your build the project using the following command.
(Don't miss the final slash)
```sh
$ ng build --base-href http://localhost:8000/app/
```