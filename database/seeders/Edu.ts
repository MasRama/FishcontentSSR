import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Edu from 'App/Models/Edu'

export default class extends BaseSeeder {
  public async run () {
    await Edu.createMany([

      {
        title: 'Demo Title 1',
        desc: 'Demo desc 1',
        img: './../../images/edukasi/ed1.webp',
        link: '/'
      },
      {
        title: 'Demo Title 2',
        desc: 'Demo desc 2',
        img: './../../images/edukasi/ed1.webp',
        link: '/' 
      }
    
    ])
  }
}

