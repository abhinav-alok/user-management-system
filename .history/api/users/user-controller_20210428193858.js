import { listAllUsers, getSingleUser, updateUserById, updateUserRole, deleteUserById } from "./user-service.js"

export const listUsers = (req, res) => {
    listAllUsers()
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
    console.log(req.body, "00000000000000000000")
    const user = req.body
    console.log(req.body, "----------------------------");
    updateUserById(user)
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