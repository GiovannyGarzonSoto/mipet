import express, {Application} from 'express'
import authRoutes from './authRoutes'
import userRoutes from './userRoutes'

const routes: Application = express()

routes.use('/api/', authRoutes)
routes.use('/api/users', userRoutes)

export default routes