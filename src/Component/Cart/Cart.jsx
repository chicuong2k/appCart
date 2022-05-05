import React,{useContext,useState,useEffect,useRef} from 'react'
import {DataContext} from '../data/DataProvider'
import { Link } from 'react-router-dom'
import '../Details/Details.scss'
import Colors from '../Details/Colors'
import Sizes from '../Details/Sizes'

const Details = () => {
  const value = useContext(DataContext)
  const [cart, setCart] = value.cart;
  const [total, setTotal] = useState(0)
  const imgDiv=useRef();

  console.log(value.cart);

  useEffect(() =>{
      const getTotal = () => {
          const res = cart.reduce((prev, item) => {
              
              return prev + (item.price * item.count)
          },0)
  console.log(res);
          
          setTotal(res)
      }
      getTotal()
  },[cart])

  const reduction = id => {
      cart.forEach(item =>{
          if(item._id === id){
              item.count === 1 ? item.count = 1 : item.count -= 1;
          }
      })
      setCart([...cart])
  }
  const increase = id => {
      cart.forEach(item =>{
          if(item._id === id){
              item.count += 1 ;
          }
      })
      setCart([...cart])
  }

  const removeProduct = id => {
      if(window.confirm("Do you want to delete this product?")){
          cart.forEach((item, index) => {
              if(item._id === id){
                  cart.splice(index, 1)
              }
          })
          setCart([...cart])
      }
  }
  const handleMouseMove=(e) => {
    const {left, top, width, height } =e.target.getBoundingClientRect();
    const x =(e.pageX - left) / width *100
    const y =(e.pageY - top) / width *100
    imgDiv.current.style.backgroundPosition = `${x}% ${y}%`
  }

  if(cart.length === 0)
      return <h2 style={{textAlign: "center", fontSize: "5rem"}}>Cart Empty</h2>

  return (
    <div>
        {
          cart.map((product,index) => {
            return <div className="details" key={product._id}>
                      <div className="img__container" onMouseMove={handleMouseMove}
                      style={{backgroundImage:`url(${product.images[index]})`}}
                        ref={imgDiv}
                      >
                      </div>
                      <div className="box__details">
                          <h2 title={product.title}>
                            {product.title}</h2>
                            <h3>${product.price}</h3>
                            <Colors colors={product.colors}/>
                            <Sizes size={product.sizes}/>
                            <p className="des">{product.description}</p>
                            <p className="des">{product.content}</p>
                            <div className="amount">
                               <button className="count" onClick={() => reduction(product._id)}> - </button>
                               <span>{product.count}</span>
                               <button className="count" onClick={() => increase(product._id)}> + </button>
                           </div>

                           <div className="delete" onClick={() => removeProduct(product._id)}>X</div>
                       </div>

                    </div>
          })
        }
                <div className="total">
               <Link to="/payment">Payment</Link>
               <h3>Total: $ {total}</h3>
           </div>
    </div>
  )
    
  }

export default Details