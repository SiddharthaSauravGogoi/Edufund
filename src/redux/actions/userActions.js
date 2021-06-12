import { USER_LOGGED_IN } from "../constants/userConstants"

export const setUser = (userData) => {
    return {
        type: USER_LOGGED_IN,
        userData
    }
}