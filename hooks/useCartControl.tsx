import { create } from "zustand";
import { persist } from "zustand/middleware";



type CartItem = {
    id: string; // Unique ID (maybe product ID or SKU)
    name: string;
    slug?: string; // for SEO/friendly URLs
    price: number; // current price
    originalPrice?: number;
    discount?:number; // before discount
    quantity: number;
    img: string; // product thumbnail
    description?: string;
    totalPrice?: number; // price * quantity
    size?: number;
    color?: string;
    inStock?:boolean;
  };


  type CartState = {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    upddateCart: (id:string, quantity:number) => void;
    removeFromCart: (id: string) => void;
    clearCart: () => void;
    getTotalItems: () => number;
  getTotalPrice: () => number;
  };


export const useCartControl = create<CartState>()(
  persist(
    (set, get) => ({

        cart: [],
      
        addToCart: (item: CartItem) => {
            set((state) => {
              const existingItem = state.cart.find((cartItem) => cartItem.id === item.id);
              if (existingItem) {
                return {
                  cart: state.cart.map((cartItem) =>
                    cartItem.id === item.id
                      ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
                      : cartItem
                  ),
                };
              }
              return { cart: [...state.cart, item] };
            });
          },
    
        upddateCart: (id: string, quantity:number) => {
            if(quantity < 1) return 
            set(state => ({
                cart: state.cart.map(item => item.id === id ? {...item, quantity} : item)
            }))
        }, 
      
        removeFromCart: (id) => {
          set((state) => ({
            cart: state.cart.filter(item => item.id !== id)
          }));
        },
      
        clearCart: () => {
          set({ cart: [] });
        }, 
        getTotalItems: () => {
            return get().cart.reduce((total, item) => total + item.quantity, 0);
          },
        
          getTotalPrice: () => {
            return get().cart.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            );
          },
    }), 
    {name: 'cart'}
  )
)

  