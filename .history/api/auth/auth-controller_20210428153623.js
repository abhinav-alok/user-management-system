import { registerUser } from "./auth-service"

/**
 *  Returns User Object.
 *  Uses an npm package bcrypt to generate hash for the password
 * 
 * @param {object} user : User Object in request
 * @return {object} user : User Object
 * 
 */

const registerUser = (req, res) => {
    const {mobile, password } = req.body;
    registerUser(mobile, password)
    .then(response => {
        res.send(response)
    })
    .catch(err => {
        res.send(err)
    })

}