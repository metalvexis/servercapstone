import express from 'express'

// import {  } from 'route/'

const router = express.Router()

router.all('/', (req, res) => {
  res.send('Welcome to UNC Thesis Management System<br><br>Documentation: <a href="https://github.com/metalvexis/stonecapserver">https://github.com/metalvexis/servercapstone#readme</a>')
})

router.all('/FAIL', (req, res, next) => {
  next(new Error('TEST'))
})

router.all('/SUCCESS', (req, res, next) => {
  res.sendStatus(200)
})

export default router
