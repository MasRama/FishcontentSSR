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

Route.get('/', async ({ view }) => {
  return view.render('home')
})

Route.get('/edukasi', async ({ view }) => {
  return view.render('edukasi')
})

Route.get('/sharing', async ({ view }) => {
  return view.render('sharing')
})

Route.get('/login', async ({ view }) => {
  return view.render('login')
})

Route.get('/regis', async ({ view }) => {
  return view.render('regis')
})

Route.post('/regis', async ({ view, request }) => {
  let Kab = request.input('kab')
  let riilKab
  if(Kab.substring(0,3) == 'KAB') {
    riilKab = Kab.slice(0, 9) + ' ' + Kab.slice(9)
  } else {
    riilKab = Kab.slice(0, 4) + ' ' + Kab.slice(4)
  }
  return riilKab
  JSON.stringify(request.all(), null, 2)

})

Route.post('/login', async ({ request, auth, response, view }) => {
  const email = request.input('email')
    const password = request.input('password')

    try {
      await auth.use('web').attempt(email, password)

      if(!auth.user?.is_verified) {
        return view.render('login', {error: "Silahkan Verifikasi Email Anda Terlebih Dahulu"})
      }

      return response.redirect('/home')  
         
    } catch {
      return view.render('login', {error: "Email/Password Salah, Silahkan Coba Lagi"})
    }
})

