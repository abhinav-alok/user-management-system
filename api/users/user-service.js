import { userModel } from "./user-model.js"

export const listAllUsers = () => {
    return userModel.find().lean().exec()
}

export const create = (user)  => {
    const newUser = new userModel(user)
    return newUser.save()
}

export const getSingleUser = (userId) => {
    return userModel.findById(userId).lean().exec()
}
export const updateUserById = (user) => {
    return userModel.findByIdAndUpdate({ _id: user._id }, user, { new: true }).lean().exec()
}

export const updateUserRole = (userId, role) => {
    return userModel.findByIdAndUpdate(
        { _id: userId },
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