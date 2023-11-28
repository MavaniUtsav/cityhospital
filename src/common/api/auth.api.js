import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../../firebase";
import { SIGNUP_RESPONSE } from "../../redux/ActionType";

export const signupApi = (data) => {
    console.log(data);

    try {
        return new Promise((resolve, reject) => {
            createUserWithEmailAndPassword(auth, data.email, data.password)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user);
                    sendEmailVerification(auth.currentUser)
                        .then(() => {
                            console.log('Email verification sent!');
                            resolve({type: SIGNUP_RESPONSE, message: 'Email verification sent!'})
                        });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                });
        })
    } catch (error) {
        console.log(error);
    }
}