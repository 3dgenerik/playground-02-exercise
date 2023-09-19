import supertest from "supertest";
import app from "../index-02";

const request = supertest(app)

describe('test endpoint', () => {
    it('get api enpoint response', async () => {
        const result = await request.get('/api')
        expect(result.status).toBe(200)
    })

    it('get name enpoint response', async () => {
        const result = await request.get('/name')
        const name = result.body.name
        expect(name).toEqual('Jovica')
    })
})