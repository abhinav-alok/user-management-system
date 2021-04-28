

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