import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
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
                    sendEmailVerification(auth.currentUser)
                        .then(() => {
                            resolve({ message: 'Email verification sent!', user: user })
                        })
                        .catch((e) => {
                            reject({ message: 'Failed to send email verification' });
                        });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;

                    if (errorCode.localeCompare('auth/email-already-in-use') === 0) {
                        reject({ message: 'Email is already in use' })
                    } else if (errorCode.localeCompare('auth/weak-password') === 0) {
                        reject({ message: 'Password should be at least 6 characters' })
                    }
                });
        })
    } catch (error) {
        console.log(error);
    }
}

export const loginApi = (data) => {
    console.log(data);

    try {
        return new Promise((resolve, reject) => {
            signInWithEmailAndPassword(auth, data.email, data.password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    resolve({ message: 'Sucessfully logged in!', user: user })
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;

                    if (errorCode.localeCompare('auth/invalid-login-credentials') === 0) {
                        reject({ message: 'Invalid username/password*' })
                    }
                });
        })
    } catch (error) {
        console.log(error);
    }
}