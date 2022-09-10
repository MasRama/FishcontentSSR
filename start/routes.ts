/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', 'PublicsController.home')

Route.group(() => {

  Route.get('/edukasi', 'PublicsController.edu')
  Route.get('/sharing', 'PublicsController.sharing')

}).middleware('auth')


Route.resource('verify', 'VerifsController')

Route.get('/login', 'AuthController.loginPage')
Route.get('/regis', 'AuthController.regisPage')

Route.post('/regis', 'AuthController.regis')
Route.post('/login', 'AuthController.login')

