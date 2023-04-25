const encode = require('./encode');
const app = require('./app');
const request = require('supertest');

const userInput = 'XXXYYYYZZQXX';
const singleDigitOverflow = 'xxxxxxxxxx';
const correctResult = 'X3Y4Z2Q1X2';
const incorrectResult = '123';

test('check if encoding is correct', () => {
    expect(encode.encode(userInput)).toStrictEqual(correctResult);
    expect(encode.encode(userInput)).not.toStrictEqual(incorrectResult);
});

test('check single digit overflow', () => {
    expect(function () {encode.encode(singleDigitOverflow)}).toThrow('Single digit error');
});

test('test endpoint', async() => {
    const res = await request(app)
        .post('/encode')
        .set({'authorization': 'xyz0987654321'})
        .send({userInput: userInput});

    expect(res.statusCode).toBe(200);
    expect(res.body.output).toStrictEqual(correctResult);
});

test('test endpoint without authorization', async() => {
    const res = await request(app)
        .post('/encode')
        .send({userInput: userInput});

    expect(res.statusCode).toBe(401);
});
