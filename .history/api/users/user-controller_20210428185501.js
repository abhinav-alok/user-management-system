import { listUsers, updateUser, updateRole, deleteUser } from "./user-service.js"

export const listUsers = (req, res) => {
    listUsers()
        .then(response => {
            res.send(response)
        })
        .catch(err => {
            res.send(err)
        })
}

export const updateUser = (req, res) => {
    const userId = req.param.id
    updateUser(userId)
        .then(response => {
            res.send(response)
        })
        .catch(err => {
            res.send(err)
        })
}

export const updateRole = (req, res) => {
    const userId = req.param.id
    updateRole(userId)
        .then(response => {
            res.send(response)
        })
        .catch(err => {
            res.send(err)
        })
}

export const deleteUser = (req, res) => {
    const userId = req.param.id
    deleteUser(userId)
        .then(response => {
            res.send(response)
        })
        .catch(err => {
            res.send(err)
        })
}