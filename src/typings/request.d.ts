import { Request } from "express"
import User from "../modules/management/user/user.model"
export interface CRequest extends Request {
  user: User,
}
