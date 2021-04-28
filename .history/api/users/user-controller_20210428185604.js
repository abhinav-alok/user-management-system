import { listAllUsers, updateUserById, updateUserRole, deleteUserById } from "./user-service.js"

export const listUsers = (req, res) => {
    listAllUsers()
        .then(response => {
            res.send(response)
        })
        .catch(err => {
            res.send(err)
        })
}

export const updateUser = (req, res) => {
    const userId = req.param.id
    updateUserById(userId)
        .then(response => {
            res.send(response)
        })
        .catch(err => {
            res.send(err)
        })
}

export const updateRole = (req, res) => {
    const userId = req.param.id
    updateUserRole(userId)
        .then(response => {
            res.send(response)
        })
        .catch(err => {
            res.send(err)
        })
}

export const deleteUser = (req, res) => {
    const userId = req.param.id
    deleteUserById(userId)
        .then(response => {
            res.send(response)
        })
        .catch(err => {
            res.send(err)
        })
}