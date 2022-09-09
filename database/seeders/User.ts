import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run () {
     await User.create({
      nama: 'Demo',
      telp: '0811111',
      alamat: 'Jl. Demo, Kec Demo, Kabupaten Demo, Demo',
      email: 'demo@gmail.com',
      password: 'demo',
      is_verified: true
     })
  }
}
