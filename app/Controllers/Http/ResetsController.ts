import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Redis from '@ioc:Adonis/Addons/Redis'
import { v4 as uuidv4 } from 'uuid';
import Hash from '@ioc:Adonis/Core/Hash'
import resetSend from '../../../resources/js/resetSend'

export default class ResetsController {
  public async index({ view }: HttpContextContract) {
    return view.render('forgot')
  }

  public async store({ request, view }: HttpContextContract) {
    const userFind = await User.findBy('email', request.input('email'))
    if(userFind) {
      //return userFind.email
      const uuid = uuidv4()
      await Redis.setex(uuid, 86400, userFind.email)
      let url = `${request.headers().host }/reset/${uuid}`
      resetSend(userFind.email, url)
      return view.render('login', {success: 'Silahkan cek email anda untuk mendapatkan password baru'})
    }
    return view.render('forgot', {error: 'Email tidak ditemukan'})
  }

  public async show({params, view}: HttpContextContract) {
    const uuidRedis = await Redis.get(params.id)
    if(!uuidRedis) {
      return `<h4>Where do you go? :)</h4>`
    }
    return view.render('resetpw', {uuid: params.id})
  }

  public async newPass({ request, params, view }: HttpContextContract) {
    const uuidRedis = await Redis.get(params.id)
    if(!uuidRedis) {
      return `<h4>Where do you go? :)</h4>`
    }

    const hashedPassword = await Hash.make(request.input('password'))

    await User.query().where('email', uuidRedis).update({password: hashedPassword})

    await Redis.del(params.id)

    return view.render('login', {success: 'Password anda telah diperbarui, Silahkan Masuk'})
  }

}
