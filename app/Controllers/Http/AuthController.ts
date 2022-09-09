import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

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


  public async regis({ request }: HttpContextContract) {
    let Kab = request.input('kab')
    let riilKab
  if(Kab.substring(0,3) == 'KAB') {
    riilKab = Kab.slice(0, 9) + ' ' + Kab.slice(9)
  } else {
    riilKab = Kab.slice(0, 4) + ' ' + Kab.slice(4)
  }

  function titleCase(str) {
    var splitStr = str?.toLowerCase().split(' ');
    for (var i = 0; i < splitStr?.length; i++) {
   // You do not need to check if i is larger than splitStr length, as your for does that for you
   // Assign it back to the array
   splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
}
// Directly return the joined string
     return splitStr?.join(' '); 
    }

    let alamat = `${request.input('detail')}, Kec ${request.input('kec')}, ${riilKab}, ${request.input('prov')}, ${request.input('kd_pos')}`

  return titleCase(alamat)
  JSON.stringify(request.all(), null, 2)
  }

  
}
