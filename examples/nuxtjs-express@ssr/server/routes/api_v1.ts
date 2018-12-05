import { Router, Request, Response, NextFunction } from 'express'

const router: Router = Router()

router.get('/login', (req: Request, res: Response, next: NextFunction ): Response => res.send('login') )

export default router