import React,{useContext,useState,useRef} from 'react'
import { useParams } from 'react-router-dom'
import {DataContext} from '../data/DataProvider'
import './Details.scss'
import { Link } from 'react-router-dom'
import Colors from './Colors'
import Sizes from './Sizes'
import Thumb from './Thumb'

const Details = () => {
    const {id} = useParams();
    const value = useContext(DataContext)
    const [product] =value.product
    const addCart =value.addCart
    const detail =product.filter((product,index) => {
      return product._id === id
    })
    const [index,setIndex]=useState(0)
    const imgDiv=useRef();


    const handleMouseMove=(e) => {
      const {left, top, width, height } =e.target.getBoundingClientRect();
      const x =(e.pageX - left) / width *100
      const y =(e.pageY - top) / width *100
      imgDiv.current.style.backgroundPosition = `${x}% ${y}%`
    }
  return (
    <div>
        {
          detail.map(product => {
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
                           <Thumb images={product.images} setIndex={setIndex}/>
                            <Link to="/cart" className='cart' onClick={() => addCart(product._id)
                    }
                    >Add to cart</Link>
                        </div>

                    </div>
          })
        }

    </div>
  )
    
  }

export default Details