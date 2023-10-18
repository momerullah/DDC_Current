import React from 'react';
import './Testimonials.css'; 
import './General.css';  // Import General.css

const Testimonials = () => {
    return (
        <section id="testimonials" className="inner-section">
            <h2 className="testimonial-heading">Testimonials</h2>
            <div className="testimonial">
                <div className="testimonial-textbox">
                    <p>"The Hyderabadi Dum Mutton Biriyani was absolutely delicious! It had the perfect blend of spices and flavors. Truly authentic!"</p>
                    <span className="author">- Muqeet</span>
                </div>
                <div className="stars">★★★★★</div>
            </div>
            <div className="testimonial">
                <div className="testimonial-textbox">
                    <p>"The food was really good, authentic hyderabadi taste taht we were expecting! The quality and the portions of meat exeeded our expectations Jazakallah! Good luck with your business and we will definetly order again!"</p>
                    <span className="author">- Tauseef</span>
                </div>
                <div className="stars">★★★★★</div>
            </div>
            <div className="testimonial">
                <div className="testimonial-textbox">
                    <p>"Deccan Delights ki Haleem poore Chicago me nai milti!"</p>
                    <span className="author">- Taqi</span>
                </div>
                <div className="stars">★★★★★</div>
            </div>
        </section>
    );
};

export default Testimonials;