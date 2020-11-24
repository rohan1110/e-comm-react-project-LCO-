import React from 'react'
import Heading from './Heading'
import {Link} from 'gatsby'

export default function Dualinfoblock({heading}) {
    return (
        <section className="my-4 py-4 bg-theme">
            <div className="container">
                <Heading title={heading} />
                <div className="row">
                    <div className="col-8 mx-auto">
                        <p className="lead text-white mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, dignissimos totam! Incidunt illo perferendis iure blanditiis! Possimus nihil excepturi ipsum praesentium quasi expedita alias omnis beatae. Soluta error, sed consectetur doloribus esse deserunt velit. Asperiores nemo, dolorem totam tenetur impedit voluptate eius aperiam quae, perferendis vitae nobis repudiandae dolorum quod ipsum assumenda, facilis quasi officiis doloremque laboriosam rerum? Ipsa ratione inventore incidunt iusto nisi facere, iure assumenda exercitationem nesciunt ex officia vitae cumque molestiae praesentium. Harum natus praesentium optio unde? Laborum vel id sapiente rem molestiae suscipit neque, reiciendis accusantium dolores aspernatur perferendis temporibus repudiandae. Sed vel alias consequuntur voluptate?
                        </p>
                    </div>
                    <div className="col-4" >
                        <div className="card bg-dark" >
                        <img src="https://images.pexels.com/photos/340152/pexels-photo-340152.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top" alt="img goes here"/>
                            <div className="card-body ">
                                <h5 className="card-title text-white ">Just click photos</h5>
                                <p className="card-text text-white ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae delectus, modi nam voluptates, exercitationem aut qui aspernatur, voluptate dolorum aliquid error corporis cum nulla. Animi esse ut aliquam ratione possimus?</p>
                                <a href="#" className="btn btn-warning btn-block">{heading}</a>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}
