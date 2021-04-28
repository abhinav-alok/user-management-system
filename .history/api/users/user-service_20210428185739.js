import { userModel } from "./user-model.js"

export const listAllUsers = () => {
    return userModel.find()
}