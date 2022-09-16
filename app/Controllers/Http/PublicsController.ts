import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Edu from 'App/Models/Edu'




export default class PublicsController {
  public async home({ view, auth }: HttpContextContract) {
    if (auth.user) {
      return view.render("home");
    }
    return view.render("home", { isLogin: "no" });
  }

    public async edu({ params, view }: HttpContextContract) {
        const coursesPerPage = 6;
        const courses = await Edu.all();
        return view.render("edukasi", {
            courses: courses.slice((params.id - 1 ) * coursesPerPage , coursesPerPage * params.id ) ,
            pagination: Array(Math.ceil(courses.length / coursesPerPage)).fill(""),
            id: Number(params.id),
        });
  }

  public async sharing({ view }: HttpContextContract) {
      return view.render('sharing');
    
  }

  public async dashboard({ view }: HttpContextContract) {
    return view.render("dashboard/profile");
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
