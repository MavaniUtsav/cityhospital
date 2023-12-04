import { createUserWithEmailAndPassword, fetchSignInMethodsForEmail, reauthenticateWithCredential, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { SIGNUP_RESPONSE } from "../../redux/ActionType";
import { useSelector } from "react-redux";



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

    try {
        return new Promise((resolve, reject) => {
            signInWithEmailAndPassword(auth, data.email, data.password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;

                    if (user.emailVerified) {
                        resolve({ message: 'Sucessfully logged in!', user: user })
                    } else {
                        reject({ message: 'Email is not verified' })
                    }
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

export const forgotApi = (data) => {
    console.log(data);

    try {
        // const fetchEmail = fetchSignInMethodsForEmail(auth, data.email)
        fetchSignInMethodsForEmail(auth, data.email).then((result) => {
            console.log(result);
        });

        return new Promise((resolve, reject) => {
            sendPasswordResetEmail(auth, data.email)
                .then(() => {
                    // Password reset email sent!
                    resolve({ message: "Password reset email sent!" })
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;

                    if (errorCode.localeCompare('auth/invalid-email') === 0) {
                        reject({ message: 'The provided email is invalid!' })
                    } else if (errorCode.localeCompare('auth/user-not-found') === 0) {
                        reject({ message: 'No user record found for the provided email!' })
                    }
                    console.log(errorCode);
                });
        })
    } catch (error) {
        console.log(error);
    }
}