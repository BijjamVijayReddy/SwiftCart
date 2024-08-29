const initialState = {
    cartItems: [],
    totalAmount: "",
    totalQuantity: 0,
    totalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const item = action.payload;
            // Remove any commas and convert to a float
            const itemPrice = parseFloat(item.price.replace(/,/g, ''));
            const existingItem = state.cartItems.find((x) => x.id === item.id);

            if (existingItem) {
                // If the item already exists, increment the quantity and update total price
                const updatedCartItems = state.cartItems.map((x) =>
                    x.id === item.id
                        ? { ...x, quantity: x.quantity + 1 }
                        : x
                );
                return {
                    ...state,
                    cartItems: updatedCartItems,
                    totalQuantity: state.totalQuantity + 1,
                    totalPrice: state.totalPrice + itemPrice, // Increment total price
                };
            } else {
                // If the item does not exist, add it with a quantity of 1
                console.log(`Adding new item: ${item.id}, Item Price: ${itemPrice}, Previous Total Price: ${state.totalPrice}`);
                return {
                    ...state,
                    cartItems: [...state.cartItems, { ...item, quantity: 1 }],
                    totalQuantity: state.totalQuantity + 1,
                    totalPrice: state.totalPrice + itemPrice, // Increment total price
                };
            }

        case 'REMOVE_FROM_CART':
            const itemId = action.payload;
            const itemToRemove = state.cartItems.find((x) => x.id === itemId);
            // Remove any commas and convert to a float
            const removeItemPrice = parseFloat(itemToRemove.price.replace(/,/g, ''));

            if (itemToRemove.quantity > 1) {
                // Decrease the quantity and update total price
                const updatedCartItems = state.cartItems.map((x) =>
                    x.id === itemId
                        ? { ...x, quantity: x.quantity - 1 }
                        : x
                );
                console.log(`Removing item: ${itemId}, Item Price: ${removeItemPrice}, Previous Total Price: ${state.totalPrice}`);
                return {
                    ...state,
                    cartItems: updatedCartItems,
                    totalQuantity: state.totalQuantity - 1,
                    totalPrice: state.totalPrice - removeItemPrice, // Decrement total price
                };
            } else {
                // Remove the item and update total price
                console.log(`Removing item completely: ${itemId}, Item Price: ${removeItemPrice}, Previous Total Price: ${state.totalPrice}`);
                return {
                    ...state,
                    cartItems: state.cartItems.filter((x) => x.id !== itemId),
                    totalQuantity: state.totalQuantity - 1,
                    totalPrice: state.totalPrice - removeItemPrice, // Decrement total price
                };
            }

        default:
            return state;
    }
};

export default cartReducer;
