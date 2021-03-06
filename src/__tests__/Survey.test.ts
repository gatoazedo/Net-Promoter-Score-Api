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
      title: 'Title example: 01',
      description: 'Description example: 01'
    })

    expect(response.status).toBe(201)
    expect(response.body).toHaveProperty('id')
  })

  it('Should be able to get all survey.', async () => {
    await request(app).post('/surveys').send({
      title: 'Title example: 02',
      description: 'Description example: 02'
    })

    const response = await request(app).get('/surveys')

    expect(response.body.length).toBe(2)
  })
})