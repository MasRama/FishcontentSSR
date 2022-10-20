import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Edu from 'App/Models/Edu'

export default class extends BaseSeeder {
  public async run () {
    await Edu.createMany([

      {
        title: 'Demo Cupang',
        desc: 'Demo Cupang Normal',
        img: './../../images/edukasi/ed1.webp',
        link: '/',
        jenis: 'cupang',
        cat: 'normal'
      },
      {
        title: 'Demo Arwana',
        desc: 'Demo Arwana Mudah',
        img: './../../images/edukasi/ed1.webp',
        link: '/', 
        jenis: 'arwana',
        cat: 'mudah'
      },
      {
        title: 'Demo Arwana',
        desc: 'Demo Arwana Sulit',
        img: './../../images/edukasi/ed1.webp',
        link: '/', 
        jenis: 'arwana',
        cat: 'sulit'
      }
    
    ])
  }
}

