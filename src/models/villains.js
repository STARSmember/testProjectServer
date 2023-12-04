import db from '../helpers/db'

export const getVillains = async (skip, take) => {
    const count = await db.villain.count()
    const villains = await db.villain.findMany({
        skip,
        take,
    })
    return { count, villains }
}

export const getVillain = async (id) =>
    db.villain.findUnique({ where: { villainId: id } })

export const addVillain = async (villainData) =>
    db.villain.create({ data: { ...villainData } })

export const updateVillain = async (id, villainData) => {
    const villain = await getVillain(id)
    if (villain) {
        return db.villain.update({
            where: { villainId: id },
            data: { ...villain, ...villainData, updatedAt: new Date() },
        })
    }
    return null
}

export const deleteVillain = async (id) =>
    db.villain.delete({ where: { villainId: id } })