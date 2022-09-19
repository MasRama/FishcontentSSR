import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Edu from 'App/Models/Edu'

export default class extends BaseSeeder {
  public async run () {
    await Edu.createMany([

      {
        title: 'Demo Cupang',
        desc: 'Demo desc 1',
        img: './../../images/edukasi/ed1.webp',
        link: '/',
        jenis: 'cupang',
        cat: 'normal'
      },
      {
        title: 'Demo Arwana',
        desc: 'Demo desc 2',
        img: './../../images/edukasi/ed1.webp',
        link: '/', 
        jenis: 'arwana',
        cat: 'mudah'
      }
    
    ])
  }
}

