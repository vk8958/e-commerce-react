// import { createContext, useEffect, useState } from "react";


// const CartContext = createContext();

// const CartContextProvider = ({ children }) => {
//     const [cartitem, setCartitem] = useState([]);

//     useEffect(() => {
//       const getproductincart = () => {
//              setCartitem()
//         }
//     })
//     // items state
//     // store items in localstorage - localStorage.setItem('key',value); localStorage.getItem('key');
//     // make functions addToCart and removeFromCart



//     const values = {
//         loading,
//         setCartitem
//     }

//     return (<CartContextProvider value={values}>{children}</CartContextProvider>)
// }


import React, { useContext, useEffect, useState } from 'react';

const { createContext } = require("react");
const HeaderContext=createContext();

export const HeaderContextProvider = ({children}) => {
    const [cartIds,setCartIds] =useState([]);
    const [favIds,setFavIds] = useState([]);
    const [cartTotal,setCartTotal] = useState();
    const [favTotal,setFavTotal] = useState();
    const [cartPrice,setCartPrice] = useState();

    useEffect(()=>{
        const getFavIds = async()=>{
            setFavIds(JSON.parse(localStorage.getItem("fav")));
        }
    getFavIds();
    },[])

    useEffect(()=>{
        const getCartIds = async()=>{
            setCartIds(JSON.parse(localStorage.getItem("cart")));
        }
    getCartIds();
    },[])

    useEffect(()=>{
        const getFavTotal =()=>{
            setFavTotal(favIds.length);
        }
        getFavTotal();
    },[favIds])

    useEffect(()=>{
        const getCartTotal =()=>{
            setCartTotal(cartIds.length);
        }
        getCartTotal();
    },[cartIds])
   
    const values={
        cartIds,
        setCartIds,
        favIds,
        setFavIds,
        cartTotal,
        setCartTotal,
        favTotal,
        setFavTotal,
        cartPrice,
        setCartPrice
    }

  return (<HeaderContext.Provider value={values}>{children}</HeaderContext.Provider>)
}

export const useHeader = ()=> useContext(HeaderContext);