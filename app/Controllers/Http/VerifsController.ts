import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Redis from '@ioc:Adonis/Addons/Redis'
import User from 'App/Models/User'

export default class VerifsController {
  public async index({ response }: HttpContextContract) {
    return response.status(404).send('404 Not Found')
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({ params, view }: HttpContextContract) {
    const uuidRedis = await Redis.get(params.id)

     if(!uuidRedis) {
      return `<h4>Where do you go? :)</h4>`
    }

    await User.query().where('email', uuidRedis).update({is_verified: true}) 
    await Redis.del(params.id)

    return view.render('login', {success: 'Email anda telah terverifikasi, Silahkan Masuk'})

  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
