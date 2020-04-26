import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { config } from '../core/config/config';
import ErrorHandler from '../core/helpers/errorHandler';
import User from './user.model';

export class UserRepository {
  public static async create(data: User) {
    const user = await User.create(data)
    return user
  }
  public static async update(id: string, data: User): Promise<User> {
    await User.update(data, { where: { id } })
    const updatedUser = await User.findByPk(id)
    return updatedUser
  }
  public static generateAuthToken(user: User) {
    const token = jwt.sign(user.toJSON(), config[process.env.NODE_ENV].jwt_secret)
    return token
  }
  public static async findByCredentials(username: string, password: string) {
    const user = await User.findOne({ where: { username } })
    if (!user) {
      throw new ErrorHandler({ message: 'Username tidak ditemukan' })
    }
    const isPasswordMatch = bcrypt.compareSync(password, user.password)
    console.log(isPasswordMatch)
    if (!isPasswordMatch) {
      throw new ErrorHandler({ message: 'Password Salah' })
    }
    return user
  }
  public static async deleteUser(id: string): Promise<string> {
    await User.destroy({ where: { id } })
    return 'User Deleted Successfully'
  }
}
