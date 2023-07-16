import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersSchema extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      
      table.string('nama', 255).nullable()
      table.string('telp', 255).nullable()
      table.string('username', 255).nullable()
      table.string('gender', 255).nullable()
      table.string('alamat', 255).nullable()
      table.string('tgl_lahir', 255).nullable()
      table.string('email', 255).notNullable()
      table.string('password', 180).notNullable()
      table.boolean('is_verified').defaultTo(false)


      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
