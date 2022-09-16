import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Redis from '@ioc:Adonis/Addons/Redis'
import { v4 as uuidv4 } from 'uuid';
import {verifSend} from '../../Scripts/verifSend'


export default class AuthController {
  public async loginPage({ view, auth }: HttpContextContract) {

    if(auth.user) {
      return view.render('home')
     }

    return view.render('login')
  }


  public async regisPage({ view, auth }: HttpContextContract) {

    if(auth.user) {
      return view.render('home')
     }

    return view.render('regis')
  }


  public async login({ auth, request, view }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    try {
      await auth.use('web').attempt(email, password)

      if(!auth.user?.is_verified) {
        return view.render('login', {error: "Silahkan Verifikasi Email Anda Terlebih Dahulu"})
      }

      return view.render('home')  
         
    } catch {
      return view.render('login', { error: 'Email/Password Salah, Silahkan coba lagi' })
    }
  }


  //route DAFTAR AKUN BARU
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

    const usernameFind = await User.findBy('username', request.input('username').toLowerCase())
    const emailFind = await User.findBy('email', request.input('email').toLowerCase())

    if(request.input('username').length < 3) {
      return view.render('regis', {error: 'Username harus diatas 3 huruf!'})
    }

    if(usernameFind) {
      return view.render('regis', {error: 'Username telah digunakan'})
    }

    if(emailFind) {
      return view.render('regis', {error: 'Email telah digunakan'})
    }

    let alamat = titleCase(`${request.input('detail')}, Kec ${kec}, ${kab}, ${prov}, ${request.input('kd_pos')}`) 

    await User.create({
      nama: request.input('nama'),
      telp: request.input('telp'),
      username: request.input('username').toLowerCase(),
      gender: request.input('gender'),
      alamat: alamat,
      email: request.input('email').toLowerCase(),
      password: request.input('password')
     })

     const uuid = uuidv4()
     await Redis.setex(uuid, 86400, request.input('email'))
      let url = `${request.headers().host }/verify/${uuid}`
      verifSend(request.input('email'), url)

     return view.render('login', {success: 'Silahkan verifikasi email anda'})

  }

  
}
