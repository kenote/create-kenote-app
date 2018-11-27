import { Router } from 'express'

const router: any = Router()

router.get('/login', (req, res) => res.send('login') )

export default router