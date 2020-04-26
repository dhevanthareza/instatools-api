import { Column, Model, Table, Unique } from 'sequelize-typescript'

@Table({
  tableName: 'Role',
  timestamps: true,
  paranoid: true
})
class Role extends Model<Role>{
  @Unique
  @Column
  public code: string

  @Column
  public name: string
}
export default Role
