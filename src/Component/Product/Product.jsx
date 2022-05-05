import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../data/DataProvider'
import './product.scss'

const Product = () => {
    const value = useContext(DataContext)
    const [product] =value.product
    const addCart =value.addCart
    console.log(addCart);
  return (
   <section>
        <div className="Products">
       {product.map(item => {
         return <div className="card" key={item._id}>
                <Link to={`/Products/${item._id}`}>
                    <img src={item.images[0]} alt="" />
                </Link>
                <div className="box">
                    <h3 title={item.title}>
                        <Link to={`/Products/${item._id}`}>{item.title}</Link>
                    </h3>
                    <p>{item.description}</p>
                    <h4>${item.price}</h4>
                    <button onClick={() => addCart(item._id)
                    }>Add to card</button>
                </div>
                </div>
        })}
        </div>
    </section>
  )
}

export default Product