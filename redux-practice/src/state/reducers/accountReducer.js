//init the store and action is the message(鴿子傳的訊息)
const reducer = (state = 0, action) => {
    switch (action.type) {
        case "deposit"://我要存錢
            return state + action.payload;

        case "withdraw"://我要領錢
            return state - action.payload;

        default:
            return state
    }
}

export default reducer;