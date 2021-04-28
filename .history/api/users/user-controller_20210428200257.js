import { listAllUsers, getSingleUser, create, updateUserById, updateUserRole, deleteUserById } from "./user-service.js"

export const listUsers = (req, res) => {
    listAllUsers()
        .then(response => {
            res.send(response)
        })
        .catch(err => {
            res.send(err)
        })
}

export const createUser = (req, res) => {
    create(req.body)
        .then(response => {
            res.send(response)
        })
        .catch(err => {
            res.send(err)
        })
}

export const singleUser = (req, res) => {
    const userId = req.params.id
    getSingleUser(userId)
        .then(response => {
            res.send(response)
        })
        .catch(err => {
            res.send(err)
        })
}

export const updateUser = (req, res) => {
    const user = req.body
    updateUserById(user)
        .then(response => {
            res.send(response)
        })
        .catch(err => {
            res.send(err)
        })
}

export const updateRole = (req, res) => {
    const userId = req.params.id
    updateUserRole(userId, req.body.role)
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