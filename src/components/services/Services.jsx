import React from "react"
import img from "../images/services.jpg"
import Back from "../common/Back"
import "../home/featured/Featured.css"
import FeaturedCard from "../home/featured/FeaturedCard"

const Scales = () => {
  return (
    <>
      <section className='Scales mb'>
        <Back name='Scales' title='Scales -All Scales' cover={img} />
        <div className='featured container'>
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Scales
