import { Router } from 'express'

import {
    getVillain,
    getVillains,
    addVillain,
    updateVillain,
    deleteVillain,
} from '../../models/villains'

const router = Router()

router.get('/', async (req, res) => {
    const size = Number(req.query.size) || 10
    const page = Number(req.query.page) || 1
    const skip = size * (page - 1)
    const take = size
    const { count, villains } = await getVillains(skip, take)
    res.set({
        'X-Total-Count': count,
        'X-Total-Pages': Math.ceil(count / size),
    })
    res.send(villains)
})

router.get('/:id', async (req, res) => {
    const villain = await getVillain(req.params.id)
    if (villain) {
        res.send(villain)
    } else {
        res.status(404).send({ msg: 'Villain not found' })
    }
})

router.post('/', async (req, res) => {
    const villain = await addVillain(req.body)
    res.send(villain)
})

router.put('/:id', async (req, res) => {
    const villain = await updateVillain(req.params.id, req.body)
    if (villain) {
        res.send(villain)
    } else {
        res.status(404).send({ msg: 'Villain not found' })
    }
})

router.delete('/:id', async (req, res) => {
    const villain = await deleteVillain(req.params.id)
    if (villain) {
        res.send(villain)
    } else {
        res.status(404).send({ msg: 'Villain not found' })
    }
})

export default router