import mongoose from "mongoose"

const ERole = {
    SUPER_ADMIN: 'super_admin',
    CUSTOMER: 'customer',
    DELIVERY_PARTNER: 'delivery_partner',
    WAREHOUSE_ADMIN: 'wareshouse_admin'
}


const UserAddressSchema =  new mongoose.Schema({
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
    },
    geoLocation: {
        type: String,
        coordinates: []
    }
})

const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    mobile: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    mail: {
        type: String
    },
    address: {
        type: UserAddressSchema
    },
    role: {
        type: String,
        enum: ERole,
        default: ERole.SUPER_ADMIN
    }
}, {timestamps: true})


export const userModel  = mongoose.model('UserSchema', UserSchema)

