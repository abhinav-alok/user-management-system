import { userModel } from "./user-model"

export cons

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