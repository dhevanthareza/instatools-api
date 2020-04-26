import bcrypt from 'bcrypt'
import { BelongsTo, Column, ForeignKey, Model, Table, Unique } from 'sequelize-typescript'
import Role from './../role/role.model'
@Table({
  tableName: 'User',
  timestamps: true,
  paranoid: true
})
class User extends Model<User> {
  @Unique
  @Column
  public username: string

  @Column
  public email: string

  @Column
  public firstName: string

  @Column
  public lastName: string

  @Column
  get password(): string {
    return this.getDataValue('password')
  }
  set password(password: string) {
    this.setDataValue('password', bcrypt.hashSync(password, 10))
  }

  @ForeignKey(() => Role)
  @Column
  public roleId: number;

  @BelongsTo(() => Role, 'role')
  public role: User;
}

export default User

