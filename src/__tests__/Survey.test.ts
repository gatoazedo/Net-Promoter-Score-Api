import request from 'supertest'
import { app } from '../app'

import createConnection from '../database'

describe('Surveys', () => {
  beforeAll(async () => {
    const connection = await createConnection()
    await connection.runMigrations()
  })

  it('Should be able to create a new survey.', async () => {
    const response = await request(app).post('/surveys').send({
      title: 'Queremos ouvir sua opnião.',
      description: 'De 0 a 10, qual nota voçê daria para nossos serviços?'
    })

    expect(response.status).toBe(201)
  })
})