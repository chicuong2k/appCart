import React from 'react'
import {createContext,useState,useEffect } from 'react'
    
export const DataContext = createContext();

export const DataProvider = (props) => {
    const [product,setProduct]=useState([
        {
            "_id": "1",
            "title": "Wacth Product 01",
            "images": [
                "https://cdn.tgdd.vn/Products/Images/7264/238392/mww-ml043-01-nam-2-org.jpg",
                "https://khothietke.net/wp-content/uploads/2021/04/PNGKhothietke.net-02297.png",
                "https://cdn.tgdd.vn/Products/Images/7264/247078/dong-ho-nam-mvw-ml053-01-1.-600x600.jpg",
                "https://khothietke.net/wp-content/uploads/2021/04/PNGKhothietke.net-02289.png"
                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 101,
            "count": 1
        },
        {
            "_id": "2",
            "title": "Wacth Product 02",
            "images": [
                "https://khothietke.net/wp-content/uploads/2021/04/PNGKhothietke.net-02297.png",
                "https://cdn.tgdd.vn/Products/Images/7264/238392/mww-ml043-01-nam-2-org.jpg",
                "https://cdn.tgdd.vn/Products/Images/7264/247078/dong-ho-nam-mvw-ml053-01-1.-600x600.jpg",
                "https://khothietke.net/wp-content/uploads/2021/04/PNGKhothietke.net-02289.png"
                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 102,
            "count": 1

        },
        {
            "_id": "3",
            "title": "Wacth Product 03",
            "images": [
                "https://cdn.tgdd.vn/Products/Images/7264/247078/dong-ho-nam-mvw-ml053-01-1.-600x600.jpg",
                "https://khothietke.net/wp-content/uploads/2021/04/PNGKhothietke.net-02297.png",
                "https://cdn.tgdd.vn/Products/Images/7264/238392/mww-ml043-01-nam-2-org.jpg",
                "https://khothietke.net/wp-content/uploads/2021/04/PNGKhothietke.net-02289.pngg"
                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 103,
            "count": 1

        },
        {
            "_id": "4",
            "title": "Wacth Product 04",
            "images": [
                "https://khothietke.net/wp-content/uploads/2021/04/PNGKhothietke.net-02289.png",
                "https://khothietke.net/wp-content/uploads/2021/04/PNGKhothietke.net-02297.png",
                "https://cdn.tgdd.vn/Products/Images/7264/247078/dong-ho-nam-mvw-ml053-01-1.-600x600.jpg",
                "https://cdn.tgdd.vn/Products/Images/7264/238392/mww-ml043-01-nam-2-org.jpg"
                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 104,
            "count": 1

        },
        {
            "_id": "5",
            "title": "Wacth Product 05",
            "images": [
                "https://cdn.tgdd.vn/Products/Images/7264/238377/mww-ml035-01-nam-1-org.jpg",
                "https://khothietke.net/wp-content/uploads/2021/04/PNGKhothietke.net-02297.png",
                "https://cdn.tgdd.vn/Products/Images/7264/247078/dong-ho-nam-mvw-ml053-01-1.-600x600.jpg",
                "https://khothietke.net/wp-content/uploads/2021/04/PNGKhothietke.net-02289.png"
                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 105,
            "count": 1

        },
        {
            "_id": "6",
            "title": "Wacth Product 06",
            "images": [
                "https://khothietke.net/wp-content/uploads/2021/04/PNGKhothietke.net-02281.png",
                "https://khothietke.net/wp-content/uploads/2021/04/PNGKhothietke.net-02297.png",
                "https://cdn.tgdd.vn/Products/Images/7264/247078/dong-ho-nam-mvw-ml053-01-1.-600x600.jpg",
                "https://khothietke.net/wp-content/uploads/2021/04/PNGKhothietke.net-02289.png"
                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 106,
            "count": 1

        }
    ])
    const [cart,setCart]=useState([])
    const addCart =(id) => {
        const check = cart.every(item => {
            return item._id !== id 
        })
        if(check){
            const data = product.filter(product => {
                return product._id === id
            })
            setCart([...cart,...data])
        }else {
            alert('the product has been added to cart')
        }
    }
    useEffect(() =>{
        const dataCart =  JSON.parse(localStorage.getItem('dataCart'))
        if(dataCart) setCart(dataCart)
     },[])
    useEffect(() => {
        localStorage.setItem('dataCart',JSON.stringify(cart))
    },[cart])
    const value ={
        product:[product,setProduct],
        cart:[cart,setCart],
        addCart:addCart
    }
  return (
      <DataContext.Provider value={value}>
          {props.children}
      </DataContext.Provider>
  )
}
