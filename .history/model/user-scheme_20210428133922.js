import { Schema } from "mongoose"


const UserAddressSchema =  new Schema({
    addressLine1: {
        type: String
    },
    addressLine2: {
        type: String
    },
    addressLine3: {
        type: String
    },
    landMark: {
        type: String
    },
    district: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    pinCode: {
        type: String
    }

})
const UserSchema = new Schema({
    name: {
        type: String
    },
    mobile: {
        type: String
    },
    mail: {
        type: String
    },
    address: {
        type: UserAddressSchema
    },
    
})