import React from 'react'
import "./ServicePageComponent.css"

const ServicePageComponent = () => {
  return (
    <section class="services" id="services">
        <h1 class="heading">Our Services!</h1>
        <div class="box-container">
            <div class="box">
                <i class="fas fa-notes-medical"></i>
                <h3>Free checkups</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit ullam exercitationem veniam dolor nihil tenetur impedit, ab similique ex fugit sunt mollitia dicta rem. Autem laboriosam qui eum dolore?</p>
            </div>
            <div class="box">
                <i class="fas fa-ambulance"></i>
                <h3>24/7 Ambulance</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit ullam exercitationem veniam dolor nihil tenetur impedit, ab similique ex fugit sunt mollitia dicta rem. Autem laboriosam qui eum dolore?</p>

            </div>
            <div class="box">
                <i class="fas fa-user-md"></i>
                <h3>Expert Doctors</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit ullam exercitationem veniam dolor nihil tenetur impedit, ab similique ex fugit sunt mollitia dicta rem. Autem laboriosam qui eum dolore?</p>

            </div>
            
            <div class="box">
                <i class="fas fa-hands-helping"></i>
                <h3>Charity help!</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit ullam exercitationem veniam dolor nihil tenetur impedit, ab similique ex fugit sunt mollitia dicta rem. Autem laboriosam qui eum dolore?</p>
            </div>
        </div>
    </section>
  )
}

export default ServicePageComponent