import { registerUser, loginUser } from "./auth-service.js"

/**
 *  Returns User Object.
 *  Uses an npm package bcrypt to generate hash for the password
 * 
 * @param {object} user : User Object in request
 * @return {object} user : User Object
 * 
 */

export const register = (req, res) => {
    const {mobile, password } = req.body;
    registerUser(mobile, password)
    .then(response => {
        res.send(response)
    })
    .catch(err => {
        res.json({status: error, error: err.message})
    })

}

export const login = (req, res) => {
    const { mobile, password } = req.body
    loginUser(mobile, password)
    .then(response => {
        res.send(response)
    })
    .catch(err => {
        res.send(err)
    })
}