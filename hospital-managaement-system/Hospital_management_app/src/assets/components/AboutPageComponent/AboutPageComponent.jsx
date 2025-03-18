import React from 'react'
import "./AboutPageComponent.css"
import pic from "./images/about_us.png"

const AboutPageComponent = () => {
  return (
    <section class="about" id="about">
        <h1 class="heading">ABOUT US</h1>
            <div class="row">
                <div class="image">
                    <img src={pic} alt="About us" title="About us"/>

                </div>
                <div class="content">
                    <h3>WE TAKE CARE OF YOUR HEALTH LIFE!</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptatum laborum tempore odit nisi. Officia ullam quam adipisci deleniti, rem porro possimus, culpa ducimus pariatur magnam nostrum, tenetur dolor nulla?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, vel. Quasi facilis aspernatur quis magni voluptate quidem, cum dolore quaerat, laborum deleniti, minima eligendi exercitationem dolorum porro molestiae officiis. Eum.</p>
                    
                </div>
            </div>
    </section>
  )
}

export default AboutPageComponent