import { registerUser } from "./auth-service.js"
import userModel from "../users/user-model.js"

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
        res.send(err)
    })

}