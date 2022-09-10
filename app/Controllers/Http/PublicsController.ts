import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PublicsController {
  public async home({ view, auth }: HttpContextContract) {

    if(auth.user) {
      return auth.user
    }

    return view.render('home', {isLogin: 'yes'})

  }

  public async edu({ view }: HttpContextContract) {
    return view.render('edukasi')
  }

  public async sharing({ view }: HttpContextContract) {
    return view.render('sharing')
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
