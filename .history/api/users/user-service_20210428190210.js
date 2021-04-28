import { userModel } from "./user-model.js"

export const listAllUsers = () => {
    return userModel.find().lean().exec()
}

export updateUserById = (user) => {
    return userModel.findByIdAndUpdate(user._id, user, { new: true }).lean().exec()
}