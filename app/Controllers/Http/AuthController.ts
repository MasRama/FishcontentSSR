import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Admin from 'App/Models/Admin'
import Redis from '@ioc:Adonis/Addons/Redis'
import { v4 as uuidv4 } from 'uuid';
import {verifSend} from '../../Scripts/verifSend'


export default class AuthController {
  public async loginPage({ view, auth }: HttpContextContract) {

    if(auth.user) {
      return view.render('pages/home')
     }

    return view.render('pages/login')
  }


  public async regisPage({ view, auth }: HttpContextContract) {

    if(auth.user) {
      return view.render('pages/home')
     }

    return view.render('pages/regis')
  }

  public async logout({ response, auth }: HttpContextContract) {

    await auth.use('web').logout()
    response.redirect('/')

  }

  public async loginAdm({ request, auth, response }: HttpContextContract) {

    const waFind = await Admin.findBy('wa', request.input('wa'))

    if(waFind) {
      await auth.use('admin').login(waFind)
      response.redirect('/edukasi/adm00?page=1')
    } 

    return 'gk ad'

  }

  public async login({ auth, request, view }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')
    console.log(email)
    console.log(password)
    const userAuth = auth.use('web')

    try {
      await userAuth.attempt(email, password)

      if(!userAuth.user?.is_verified) {
        return view.render('pages/login', {error: "Silahkan Verifikasi Email Anda Terlebih Dahulu"})
      }

      return view.render('pages/home')  
         
    } catch {
      return view.render('pages/login', { error: 'Email/Password Salah, Silahkan coba lagi' })
    }
  }


  //route DAFTAR AKUN BARU
  public async regis({ request, view }: HttpContextContract) {
    let kab = "null"
    let kec = "null"
    let prov = "null"

  function titleCase(str) {
    var splitStr = str?.toLowerCase().split(' ');
    for (var i = 0; i < splitStr?.length; i++) {
   splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
     return splitStr?.join(' '); 
    }

    const usernameFind = await User.findBy('username', request.input('username').toLowerCase())
    const emailFind = await User.findBy('email', request.input('email').toLowerCase())

    if(request.input('username').length < 3) {
      return view.render('pages/regis', {error: 'Username harus diatas 3 huruf!'})
    }

    if(usernameFind) {
      return view.render('pages/regis', {error: 'Username telah digunakan'})
    }

    if(emailFind) {
      return view.render('pages/regis', {error: 'Email telah digunakan'})
    }

    let alamat = titleCase(`${request.input('detail')}, Kec ${kec}, ${kab}, ${prov}, ${request.input('kd_pos')}`) 

    await User.create({
      nama: request.input('nama'),
      telp: request.input('telp'),
      username: request.input('username').toLowerCase(),
      gender: request.input('gender'),
      alamat: alamat,
      tgl_lahir: request.input('tgl_lahir'),
      email: request.input('email').toLowerCase(),
      password: request.input('password')
     })

     const uuid = uuidv4()
     await Redis.setex(uuid, 86400, request.input('email'))
      let url = `${request.headers().host }/verify/${uuid}`
      verifSend(request.input('email'), url)

     return view.render('pages/login', {success: 'Silahkan verifikasi email anda'})

  }

  
}
