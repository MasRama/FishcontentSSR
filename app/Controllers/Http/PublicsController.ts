import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Edu from 'App/Models/Edu';




export default class PublicsController {
  public async home({ view, auth }: HttpContextContract) {
    if (auth.user) {
      return view.render("home");
    }
    return view.render("home", { isLogin: "no" });
  }

  public async edu({ request, view }: HttpContextContract) {
    const coursesPerPage = 6;
    const courses = await Edu.all();
    const param = request.qs();

    function capitalize(word) {
      const lower = word.toLowerCase();
      return word.charAt(0).toUpperCase() + lower.slice(1);
    }

    if(param.jenis) {
      let findJenis = await Edu.query().where('jenis', param.jenis)
      if(param.cat) {
        findJenis = await Edu.query().where('jenis', param.jenis).where('cat', param.cat)
      }
      return view.render("edukasi", {
        courses: findJenis.slice(
          (param.page - 1) * coursesPerPage,
          coursesPerPage * param.page
        ),
        pagination: Array(Math.ceil(courses.length / coursesPerPage)).fill(""),
        id: Number(param.page),
        jenis: capitalize(param.jenis),
        cat: capitalize(param.cat) || null
      });
    }

    if(param.cat) {
      const findCat = await Edu.query().where('cat', param.cat)
      return view.render("edukasi", {
        courses: findCat.slice(
          (param.page - 1) * coursesPerPage,
          coursesPerPage * param.page
        ),
        pagination: Array(Math.ceil(courses.length / coursesPerPage)).fill(""),
        id: Number(param.page),
        cat: capitalize(param.cat)
      });
    }

    return view.render("edukasi", {
      courses: courses.slice(
        (param.page - 1) * coursesPerPage,
        coursesPerPage * param.page
      ),
      pagination: Array(Math.ceil(courses.length / coursesPerPage)).fill(""),
      id: Number(param.page),
    });
  }
  public async eduadm({ request, view }: HttpContextContract) {
    const coursesPerPage = 6;
        const courses = await Edu.all();
        const d = [...courses, {isAdd : true , link : "/"}]
        const param = request.qs();

    return view.render("edukasiadm", {
      courses: d.slice(
        (param.page - 1) * coursesPerPage,
        coursesPerPage * param.page
      ),
      pagination: Array(Math.ceil(d.length / coursesPerPage)).fill(""),
      id: Number(param.page),
      isAdmin: true,
        
    });
  }

  public async sharing({ view }: HttpContextContract) {
    return view.render("sharing");
  }

  public async dashboard({ view }: HttpContextContract) {
    return view.render("dashboard/profile");
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
