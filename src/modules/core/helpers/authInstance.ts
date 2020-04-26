import User from '../../management/user/user.model';

class AuthInstance {
  private static instance: AuthInstance;
  user: User
  public getInstance(): AuthInstance {
    if (!AuthInstance.instance) {
      AuthInstance.instance = new AuthInstance();
    }

    return AuthInstance.instance;
  }
  public static getUser() {
    return (new AuthInstance()).getInstance().user
  }
  public static setUser(user: User) {
    (new AuthInstance()).getInstance().user = user
  }
}
export default AuthInstance