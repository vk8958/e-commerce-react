import Card from '../../Components/Card';
import React from 'react'
import { useProduct } from '../../Context/ProductContext'
import styles from './styles.module.css';

const Products = () => {
    
    const {productList, loading} = useProduct();
 console.log(productList)
    // console.log(productList);

  return (
    <div className={styles.cardGroup}>
        {
            !loading ? (
                productList?.map((item,index)=>{
                    return (
                        <Card key={index} item={item}/>
                    )
                })
            ) : (<h1>loading......</h1>)
        }
    </div>
  )
}

export default Products