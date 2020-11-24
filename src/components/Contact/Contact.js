import React from 'react'
import Heading from '../reusable/Heading'

export default function Contact() {
    return (
        <section className="py-3">
            <Heading title="Contact us"/>
            <div className="col-10 col-sm-8 mx-auto">
                <form action="https://formspree.io/rohanbansal1110@gmail.com " method="POST">
                    <div className="form-group">
                        <input 
                        className="form-control" 
                        type="text" 
                        name="name" 
                        id="name" 
                        placeholder="Your name"/>
                    </div>
                    <div className="form-group">
                        <input 
                        className="form-control" 
                        type="text" 
                        name="E-mail" 
                        id="E-mail" 
                        placeholder="Your E-mail"/>
                    </div>
                    <div className="form-group">
                        <input 
                        className="form-control" 
                        type="text" 
                        name="conatct no." 
                        id="conatct no." 
                        placeholder="Your conatct no."/>
                    </div>
                    <div className="form-group">
                        <textarea
                        className="form-control" 
                        type="text" 
                        name="description" 
                        id="description" 
                        placeholder="Your message"/>
                    </div>
                    <button type="submit"
                    className="btn btn-outline-info btn-block">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    )
}
