import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

const courses = [
  {
    title: "Cara berternak ikan cupang",
    desc: "Disini kamu akan belajar cara membudidayakan ikan cupang secara lengkap. Materi disajikan melalui vidio dan juga E-Book pembelajaran. Kamu juga bisa belajar secara syncronous dengan menghubungi tentor yang tersedia.",
    img: "./../../images/edukasi/ed1.webp",
    link: "/",
    alt: "cupang",
  },
  {
    title: "Cara berternak ikan cupang",
    desc: "Disini kamu akan belajar cara membudidayakan ikan cupang secara lengkap. Materi disajikan melalui vidio dan juga E-Book pembelajaran. Kamu juga bisa belajar secara syncronous dengan menghubungi tentor yang tersedia.",
    img: "./../../images/edukasi/ed1.webp",
    link: "/",
    alt: "cupang",
  },
  {
    title: "Cara berternak ikan cupang",
    desc: "Disini kamu akan belajar cara membudidayakan ikan cupang secara lengkap. Materi disajikan melalui vidio dan juga E-Book pembelajaran. Kamu juga bisa belajar secara syncronous dengan menghubungi tentor yang tersedia.",
    img: "./../../images/edukasi/ed1.webp",
    link: "/",
    alt: "cupang",
  },
  {
    title: "Cara berternak ikan cupang",
    desc: "Disini kamu akan belajar cara membudidayakan ikan cupang secara lengkap. Materi disajikan melalui vidio dan juga E-Book pembelajaran. Kamu juga bisa belajar secara syncronous dengan menghubungi tentor yang tersedia.",
    img: "./../../images/edukasi/ed1.webp",
    link: "/",
    alt: "cupang",
  },
  {
    title: "Cara berternak ikan cupang",
    desc: "Disini kamu akan belajar cara membudidayakan ikan cupang secara lengkap. Materi disajikan melalui vidio dan juga E-Book pembelajaran. Kamu juga bisa belajar secara syncronous dengan menghubungi tentor yang tersedia.",
    img: "./../../images/edukasi/ed1.webp",
    link: "/",
    alt: "cupang",
  },
  {
    title: "Cara berternak ikan cupang",
    desc: "Disini kamu akan belajar cara membudidayakan ikan cupang secara lengkap. Materi disajikan melalui vidio dan juga E-Book pembelajaran. Kamu juga bisa belajar secara syncronous dengan menghubungi tentor yang tersedia.",
    img: "./../../images/edukasi/ed1.webp",
    link: "/",
    alt: "cupang",
  },
  {
    title: "Cara berternak ikan cupang",
    desc: "Disini kamu akan belajar cara membudidayakan ikan cupang secara lengkap. Materi disajikan melalui vidio dan juga E-Book pembelajaran. Kamu juga bisa belajar secara syncronous dengan menghubungi tentor yang tersedia.",
    img: "./../../images/edukasi/ed1.webp",
    link: "/",
    alt: "cupang",
  },
];
const coursesPerPage = 6;

export default class PublicsController {
  public async home({ view, auth }: HttpContextContract) {
    if (auth.user) {
      return view.render("home");
    }
    return view.render("home", { isLogin: "no" });
  }

  public async edu({ params,view }: HttpContextContract) {
      return view.render("edukasi", {
        courses: courses.slice((params.id-1)* coursesPerPage , params.id*coursesPerPage ),
        pagination: Array(Math.ceil(courses.length / coursesPerPage)).fill(""),
        id: Number(params.id),
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
