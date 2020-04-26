import { Response, Router } from 'express';
import { asyncHandler } from '../../core/helpers/asyncHandler';
import AuthInstance from '../../core/helpers/authInstance';
import authMiddleware from '../../core/middlewares/auth.middleware';
const userRouter = Router()

userRouter.get(
  '/tes',
  asyncHandler(async (req: any, res: Response) => {
    const user = AuthInstance.getUser()
    res.json(user)
  }),
)

const userController = Router()

userController.use('/user', authMiddleware, userRouter)

export { userController };

