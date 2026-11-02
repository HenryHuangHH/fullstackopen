const { test, before, after, beforeEach } = require('node:test')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const config = require('../utils/config')

const api = supertest(app)
const assert = require('node:assert')
const blog = require('../models/blog')

before(async () => {
    await mongoose.connect(config.URL, { family: 4 })
})



test('test GET', async () => {
    await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})

test('all blogs are returned', async () => {
    const response = await api.get('/api/blogs')

    assert.strictEqual(response.body.length, 2)
})

test('every blog has unique id', async () => {
    const bloglist = await api.get('/api/blogs')
    // console.log(bloglist.body)

    bloglist.body.forEach(b => {
        assert.ok(b.id)
    }
    )
})

test('post request test', async () => {

    const initialR = await api.get('/api/blogs')
    const initialNum = initialR.body.length

    const testblog = {
        title: "testblog",
        author: "user1",
        url: "str",
        likes: 1
    }

    await api
        .post('/api/blogs')
        .send(testblog)
        .expect(201)

    const finalr = await api.get('/api/blogs')
    const finalNum = finalr.body.length

    assert.strictEqual(finalNum, initialNum + 1)


})

after(async () => {
    await mongoose.connection.close()
})