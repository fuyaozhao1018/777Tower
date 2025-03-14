import React from "react"
import Back from "../common/Back"
import RecentCard from "../home/recent/RecentCard"
import "../home/recent/recent.css"
import img from "../images/777_Tower.jpg"

const Suite = () => {
  return (
    <>
      <section className='Suite-out mb'>
        <Back name='Suite' title='Suite Grid - Our Offices' cover={img} />
        <div className='container recent'>
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Suite
