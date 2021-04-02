export const hookUserRegister = (emailAddress) => { 
    return { 
        type : 'PROCEED_REGISTER',
        payload: emailAddress
    };
}