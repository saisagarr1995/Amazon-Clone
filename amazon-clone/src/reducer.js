export const initialState = {
    basket: [],
    user: null,
}

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0)

const reducer = (state, action) => {
    // console.log(`yoooo...>>>>>>>>${action}`)
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        case 'ADD_TO_BASKET':
            //Logic of adding item to basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        // break;
        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket]

            //* we checked if the product exists
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)

            if (index >= 0) {
                //*existing item in the cart will be slice and removed here
                newBasket.splice(index, 1)

            } else {
                console.warn(
                    `cant remove product (id: ${action.id}) as its not in the cart`
                )
            }
            return {
                ...state,
                basket: newBasket
            }
        default:
            return state;
    }
}

export default reducer;