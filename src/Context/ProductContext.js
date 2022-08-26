import axios from "axios";

const { createContext, useContext, useState, useEffect } = require("react");

const ProductContext = createContext();


export const ProductContextProvider = ({children}) =>{

    const [productList,setProductList] = useState([]);
    const [loading, setLoading] = useState(false);
    // console.log(children);

    useEffect(()=>{
        setLoading(true);
        const getProducts = async() =>{
            await axios.get("https://fakestoreapi.com/products").then((res)=>{
                setProductList(res.data);
                setLoading(false);
            });
        }
        getProducts();
        console.log(productList);
    },[]);





    const values = {
        productList,
        loading
    };

    return (<ProductContext.Provider value={values}>{children}</ProductContext.Provider>);
}





export const useProduct = () => useContext(ProductContext);