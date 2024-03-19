import { configureStore } from "@reduxjs/toolkit";
import CartSlice, { initCartLocal } from "./slices/CartSlice";
import UserSlice from "./slices/UserSlice";


export const store = configureStore({
    reducer: {
        cart: CartSlice,
        user: UserSlice
    }
})

store.subscribe(() => {
    const state = store.getState();

    const cart = state.cart;

    localStorage.setItem('cartLocal', JSON.stringify(cart));
})

const initCart = () => {
    const cartLocal = localStorage.getItem('cartLocal');

    if(cartLocal) {
        const cart = JSON.parse(cartLocal);

        store.dispatch(initCartLocal(cart));
    }
}

initCart();