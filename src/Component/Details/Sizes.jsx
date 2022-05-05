import React from 'react'

const Sizes = ({size}) => {
  return (
    <div className="sizes">
{size.map((sizes,index) => {
  return <button  key={index}>{sizes}</button>
})}
</div>
  )
}

export default Sizes

