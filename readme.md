# Angular and Laravel Together
This project is the final outcome of my video tutorial on how to use Angular and Laravel together.
So make sure you watch that video from the following link to make the most out of this package.
[https://youtu.be/97BggEw0dJI](https://youtu.be/97BggEw0dJI)

### Key features

 * Not required to integrate JSON Web Token (JWT) or Laravel Passport.
 * Step by step setup guide (Including some useful hints)
 * Non-destructive Authentication in Laravel
 * Non-destructive TS-Lint in Angular 
 * Cross-Origin Resource Sharing already enabled
 * Latest Angular Version 4.3
 * Latest Laravel Version 5.5
 * Video tutorial available on youtube on how this project was created. So you know what exactly you need to modify in order to meet your project requirements.
 * Easy to setup
 * Laravel and Angular project separated(Modouled)
 * Backend developer and front-end can work completely isolated from each other.
 * Works with any angular theme from the Themeforest.

####After you watch the video mentioned above, please the follow the following steps to setup the project on your machine.

### Setup Angular Project:

Clone this project
```sh
$ git clone https://github.com/nechar/Angular-Laravel.git
```
 
### Setup Angular Project:
Open a terminal or command prompt and go to angular-module
```sh
$ cd Angular-Laravel/angular-module
```

Install node dependencies
```sh
$ npm install
```

Run the angular server (Optional: required during development only)
```sh
$ ng serve
```
Do not close this terminal

See check to see if it works in the browser (Optional: It is required during front-end development only)

[http://localhost:4200](http://localhost:4200/)



Open a new terminal and build the project into the public directory of laravel-module. (Don't miss the final slash)
```sh
$ ng build --base-href http://localhost:8000/app/
```
Note to remember: In case you run "ng serve" anytime later, the final build inside laravel-module/public/app/ folder will be deleted. So, make that you build the project again if that happens.


### Setup Laravel Project:

Open a new Terminal and go to laravel-module
```sh
$ cd /laravel-module
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


Congratulations, you have successfully completed the project setup.
The following command is the most important command that you might want to use over and over again after any modification in angular.
So, make sure you copy this command in a safe place.
During production, you will need to change the URL to whatever your URL is with a prefix /app/
```sh
$ ng build --base-href http://localhost:8000/app/
```