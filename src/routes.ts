import { Router } from 'express'
import { SurveysController } from './controllers/SurveysController'
import { UserController } from './controllers/UserController'

const router = Router()

const userController = new UserController()
const surveysController = new SurveysController()

router.post('/user', userController.create)

router.get('/surveys', surveysController.show)
router.post('/surveys', surveysController.create)

export {router}