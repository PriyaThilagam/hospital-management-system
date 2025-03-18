import React from 'react'
import "./HomePageComponent.css"
import pic from "./images/homepage.png"

const HomePageComponent = () => {
  return (
    <div class="home" id="home">
        <div class="logo">
            <img src={pic} alt="homePageImage" height="460" width="200"/>
        </div>
        <div class="content">
            <h2>AJP HMS here to help you!</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione ullam excepturi minima, error sequi voluptatem harum alias adipisci obcaecati reiciendis? Praesentium eaque iure exercitationem enim ratione reprehenderit veritatis beatae?</p>
            <address>For any queries, Mail us!</address>
            <a href="mailto:jeevapriya1473@gmail.com,aswinth.sec@gmail.com,p04898870@gmail.com?subject=Want to contact you regarding...." target="_blank"><button class="btn">MAIL US!<span class="fas fa-chevron-right"></span></button></a>
        </div>
    </div>
  )
}

export default HomePageComponent