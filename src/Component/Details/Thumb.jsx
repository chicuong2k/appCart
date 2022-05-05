import React from 'react'

const Thumb = ({images,setIndex}) => {
  return (
    <div className="thumb">
    {
      images.map((urlImg,index) => {
        return <img src={urlImg} alt="" key={index}
        onClick={() => setIndex(index)}
        />
      })
    }
  </div>
  )
}

export default Thumb