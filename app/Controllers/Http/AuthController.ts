import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class AuthController {
  public async loginPage({ view }: HttpContextContract) {
    return view.render('login')
  }


  public async regisPage({ view }: HttpContextContract) {
    return view.render('regis')
  }


  public async login({ auth, request, view, response}: HttpContextContract) {
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
  }


  public async regis({ request, view }: HttpContextContract) {
    let kab = request.input('kab').replace(/;/g, ' ')
    let kec = request.input('kec').replace(/;/g, ' ')
    let prov = request.input('prov').replace(/;/g, ' ')

  function titleCase(str) {
    var splitStr = str?.toLowerCase().split(' ');
    for (var i = 0; i < splitStr?.length; i++) {
   splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
     return splitStr?.join(' '); 
    }

    let alamat = titleCase(`${request.input('detail')}, Kec ${kec}, ${kab}, ${prov}, ${request.input('kd_pos')}`) 

    await User.create({
      nama: request.input('nama'),
      telp: request.input('telp'),
      alamat: alamat,
      email: request.input('email'),
      password: request.input('password'),
      is_verified: true
     })

     return view.render('login')

  }

  
}
