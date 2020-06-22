import express, {Application} from 'express'
import morgan from 'morgan'
import routes from './routes/'
import {join} from 'path'
import env from 'dotenv'


const app: Application = express()
env.config()

//config
app.set('PORT', process.env.PORT || 3666)

//middlewares
app.use(morgan('dev'))

//routes
app.use(routes)

//static files
app.use(express.static(join(__dirname, 'public')))

export default app