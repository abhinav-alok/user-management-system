import { userModel } from "./user-model.js"

export const listAllUsers = () => {
    return userModel.find().lean().exec()
}

export const updateUserById = (user) => {
    return userModel.findByIdAndUpdate(user._id, user, { new: true }).lean().exec()
}

export const updateRole = (userId, role) => {
    return userModel.findByIdAndUpdate(
        user._id,
        {
            $set: {
                role
            }
        }, { new: true }).lean().exec()
}