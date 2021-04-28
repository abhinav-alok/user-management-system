import { registerUser } from "./auth-service.js"

/**
 *  Returns User Object.
 *  Uses an npm package bcrypt to generate hash for the password
 * 
 * @param {object} user : User Object in request
 * @return {object} user : User Object
 * 
 */

export const register = (req, res) => {
    console.log(mobile, password)
    const {mobile, password } = req.body;
    registerUser(mobile, password)
    .then(response => {
        console.log(response, "---")
        res.send(response)
    })
    .catch(err => {
        res.send(err)
    })

}