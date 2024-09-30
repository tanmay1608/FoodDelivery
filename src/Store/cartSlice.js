import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        //reducer function takes 2 argument 
        // state is current state and action object

        
        addItem:(state, action)=>{  

            //Mutating the state here
        // Vanilla(older) Redux => DON'T MUTATE STATE, returning was mandatory
        //so ealier we used to create acopy of state variable
        //and then modify the newState

        //this is we used to earlier
        // const newState={...state}
        // newState.items.push(action.payload);
        // return newState;

        //Redux Toolkit => we must have to mutate the state
        //so , even now redux doing the same thing behind the scenes
        // and react uses Immer library to do this
        //so Immer takes the current state - mutated state and calucltes diffs and give a immuatabe state to the Redux

        //earlier we have to make deep clone

            state.items.push(action.payload);
        },
        removeItem: (state)=>{
            state.items.pop();
        },
        clearCart: (state)=>{
            //state=[] won't work as we are re assinging the reference
            // as earlier it is referencing to state
            //in normal conslose it shows proxy object
            //we can't directly console state
            // fot this we cna use current(state) , current comes form redux-toolkit

            //RTX says=>either mutate the state or return a new state
           // we can do this => state.items.length=0;
           //or
           return {items:[]};
        }

    }
});

//we will export two things we will export reducer and actions
// we are doing this because RTk gives this syntax

//so createSlice() gives an object which contains actions and reducer

// {
//     actions:{
//         addItem,
//         removeItem,
//         clearCart
//     },
//     reducer:
// }

export const {addItem,removeItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer;