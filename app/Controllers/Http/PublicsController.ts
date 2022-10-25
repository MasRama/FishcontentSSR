import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Edu from 'App/Models/Edu';


export default class PublicsController {
  
  public async home({ view, auth }: HttpContextContract) {
    const userAuth = auth.use('web')
    if (userAuth.user) {
      return view.render("home");
    }
    return view.render("home", { isLogin: "no" });
  }

  public async edu({ request, view }: HttpContextContract) {
    
    const coursesPerPage = 6;
    const courses = await Edu.all();
    const param = request.qs();
    
    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
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
        cat: param.cat ? capitalize(param.cat) : param.cat
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
        cat: param.cat ? capitalize(param.cat) : param.cat
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

  public async dashboard({ view, auth }: HttpContextContract) {
    const userAuth = auth.use('web')
    return view.render("dashboard/profile", {
      username: userAuth.user?.username,
      nama: userAuth.user?.nama,
      gender: userAuth.user?.gender,
      tgl_lahir: userAuth.user?.tgl_lahir,
      telp: userAuth.user?.telp,
      email: userAuth.user?.email,
      alamat: userAuth.user?.alamat
    });
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
