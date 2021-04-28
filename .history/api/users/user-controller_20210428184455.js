import { userModel } from "./user-model"

export const deleteUser = (req, res) => {
    const userId = req.param.id

    return userModel.findByIdAndDelete(userId)
}