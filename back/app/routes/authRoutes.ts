import {Router} from 'express'
import {authController} from '../controllers/authController'

const router: Router = Router()

router.get('/', authController.signup)

export default router