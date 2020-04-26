import { UserRepository } from '../../management/user/user.repository';

export class AuthService {
  public static async login(username: string, password: string) {
    const user = await UserRepository.findByCredentials(username, password)
    const token = UserRepository.generateAuthToken(user)
    return { ...user.toJSON(), token }
  }
}