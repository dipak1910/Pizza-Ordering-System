// import { produce } from "immer";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
// export let useCartStore = create ((set)=>({
//     cart:[],
//     addToCart:(product)=>set((state)=>({cart:[...state,product]})),
//     removeFromCart:(productId)=>set((state)=>({cart:state.cart.filter((product)=>product.id != productId)})),
//     clearCart:()=>set((state)=>({cart:[]}))
// }))

export let useCartStore = create(persist(
    immer(
    (set)=>({
        cart:[],
        total:0,
        addToCart : (product)=>set((state)=>{
            let index = state.cart.findIndex((p)=>p.id == product.id )
            if(index == -1){
            state.cart.push(product)
            }else{
                state.cart[index].quantity += 1
                state.cart[index].tprice = state.cart[index].quantity * state.cart[index].price
            }
            state.total = state.cart.reduce((prev,curr)=>prev+curr.tprice,0)
        }),
        updateCart: (index,quantity)=>set((state)=>{
            state.cart[index].quantity = quantity
            state.cart[index].tprice = state.cart[index].quantity * state.cart[index].price
            state.total = state.cart.reduce((prev,curr)=>prev+curr.tprice,0)
        }),
        removeFromCart :(productId)=>set((state)=>{
            state.cart= state.cart.filter((product)=>product.id != productId)
            state.total = state.cart.reduce((prev,curr)=> prev + curr.tprice,0)
        }),
        clearCart : ()=>set((state)=>({cart : []})) 
    })
),
{
    name:'cartstore',
    storage:createJSONStorage(()=>sessionStorage)
}))