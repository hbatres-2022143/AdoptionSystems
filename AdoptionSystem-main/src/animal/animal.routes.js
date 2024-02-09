'use strict'

import express from 'express'
import { addAnimal, deleteA, updateA, listA } from './animal.controller.js'

const api = express.Router()

api.post('/newAnimal', addAnimal)
api.delete('/delet/:id', deleteA)
api.put('/upadat/:id', updateA)
api.get('/lista', listA)

export default api