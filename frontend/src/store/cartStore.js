import { create } from "zustand";
import { persist } from 'zustand/middleware'

const useCartStore = create(persist(
    (set, get) => ( {
        items: [],

        addItem: (product) => {
            const items = get().items;
            const index = items.findIndex(item => item.id === product.id);

            if(index !== -1) {
                const newItems = [...items];
                newItems[index] = {
                    ...newItems[index],
                    quantity: newItems[index].quantity + 1,
                }
                set({
                    items: newItems,
                })
            } else {
                set({ items: [
                        ...items,
                        {
                            ...product, quantity: 1
                        }
                    ] })
            }
        },

        removeItem: (product) => {
            const newRemoveItems = get().items.filter(item => item.id !== product.id);
            set({
                items: newRemoveItems,
            })
        },

        updateQuantity: (id, newQuantity) => {

            if(newQuantity < 1) {
                return null;
            } else {
                set({
                    items : get().items.map(item => {
                        return item.id === id ? {...item, quantity: newQuantity} : item
                    })
                })
            }
        },

        clearCart : () => {
            set({
                items: []
            })
        }
    }),
    {
        name: "cart-storage",
        partialize : (state) => ({
            items: state.items
        })
    }
))

export default useCartStore