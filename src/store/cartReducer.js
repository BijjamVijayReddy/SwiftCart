const initalState = {
    cartItems: []
};

const cartReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const item = action.payload
            const existItem = state.cartItems.find((x) => x.id === item.id);
            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) =>
                        x.id === existItem.id ? { ...x, quantity: x.quantity + item.quantity } : x
                    ),
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item],
                };
            }

        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cartItems: state.cartItems.filter((x) => x.id !== action.payload),
            };

        default:
            return state
    }
};

export default cartReducer