import React from 'react'
import Heading from "./Heading"
import {Link} from 'gatsby'
 
export default function Infoblock({heading}) {
    return (
        <section className="bg-theme my-5 py-4">
            <div className="container">
                <Heading title={heading}/>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-white mb-4">
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde tempora, reprehenderit impedit tenetur, quibusdam repudiandae laudantium qui corrupti quas dolore natus rem reiciendis sed dicta eveniet autem recusandae numquam aspernatur nisi ad iste? Odit, eveniet molestias explicabo modi cum vero doloremque voluptates aliquam recusandae repellendus ex suscipit officiis necessitatibus. Numquam voluptate voluptates quaerat, esse itaque eum culpa eveniet nam repudiandae?
                        </p>
                        <Link to="/about/" >
                            <button className="btn btn-warning btn-lg">
                                {heading}
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    )
}
