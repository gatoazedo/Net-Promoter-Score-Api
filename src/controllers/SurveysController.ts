import { Request, Response } from 'express'
import { getCustomRepository } from "typeorm"
import { SurveysRepository } from "../repositories/SurveysRepository"

class SurveysController {
  async create(request: Request, response: Response) {
    const {title, description} = request.body

    const surveysRepostiory = getCustomRepository(SurveysRepository)

    const survey = surveysRepostiory.create({
      title, 
      description
    })

    await surveysRepostiory.save(survey)

    return response.status(201).json(survey)
  }
}

export {SurveysController}