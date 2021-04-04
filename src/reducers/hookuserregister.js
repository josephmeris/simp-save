const hookUserRegisterReducer = (state = "", action) => {
    switch (action.type) {
        case 'PROCEED_REGISTER':
            return action.payload;
            default:
                return state;
    }
}

export default hookUserRegisterReducer;