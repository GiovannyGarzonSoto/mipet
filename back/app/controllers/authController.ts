import {Request, Response} from 'express'

class AuthController{
    public async signup(req: Request, res: Response): Promise<void> {
        try{
            res.send('signup authcontroller on bpp bpp')
        }catch(err){

        }
    }
}

export const authController = new AuthController()