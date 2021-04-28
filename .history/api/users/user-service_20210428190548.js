import { userModel } from "./user-model.js"

export const listAllUsers = () => {
    return userModel.find().lean().exec()
}

export const updateUserById = (user) => {
    return userModel.findByIdAndUpdate({ _id: user._id }, user, { new: true }).lean().exec()
}

export const updateUserRole = (userId, role) => {
    return userModel.findByIdAndUpdate(
        { _id: user._id },
        {
            $set: {
                role
            }
        }, { new: true })
        .lean()
        .exec()
}

export const deleteUserById = ( userId) => {
    return userModel.findByIdAndDelete(userId)
}