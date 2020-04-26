import { Router } from 'express'
import { asyncHandler } from '../helpers/asyncHandler'
import { AuthService } from '../service/auth.service'
import { ResponseService } from '../service/response.service'

const authRouter = Router()

authRouter.post(
  '/login',
  asyncHandler(async (req: any, res: any) => {
    const { username, password } = req.body
    const data = await AuthService.login(username, password)
    return ResponseService.success(res, 'Berhasil Login', data)
  }),
)

const authController = Router()

authController.use('/auth', authRouter)

export { authController }

