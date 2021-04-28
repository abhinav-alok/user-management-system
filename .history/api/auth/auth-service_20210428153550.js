import bcrypt from "bcryptjs"

export const registerUser = async (mobile, password) => {
    
    //Added layer of security to make the password more secure
    // Adds a random generated string to the round's
    // const salt = 

    const hashedPassword = await bcrypt.hash(password, 10)
    console.log(mobile, password, hashedPassword)

}