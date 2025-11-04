export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const nameRegex = /^[A-Za-z\s]+$/;
export const letter = /[A-Za-z]/;                   //At least one letter 
export const numbers = /\d/;                        //At least one number
export const spcialChar = /[!@#$%^&*(),.?":{}|<>]/; //At least one special character
export const onlyLatter = /^[A-Za-z]+$/;
export const onlyNumbers = /^[0-9]+$/;

export const errorMessages = {
    signup: 'Please sign up first.',
    emptyName: 'Username cannot be empty.',
    emptyPassword : 'Password cannot be empty.',
    emptyEmail: 'Email cannot be empty.',
    emailRegex : 'Please enter a valid email address.',
    nameRegex : 'Username can only contain letters and spaces.',
    incorrectEmail: 'User not exist Email.',
    weakPassword: 'Password must be at least 8 characters long.',
    incorrectPassword: 'Incorrect password.',
    specialChar : 'Password must contain letters, numbers, and special characters',
    latterOrNumber : 'Password cannot contain only letters or numbers'
};