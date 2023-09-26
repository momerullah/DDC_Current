import React from 'react';
import './Testimonials.css'; 

const Testimonials = () => {
    return (
        <section id="testimonials" className="testimonials-section">
            <h2>Testimonials</h2>
            <div className="testimonial">
                <div className="testimonial-textbox">
                    <p>"The Hyderabadi Dum Mutton Biriyani was absolutely delicious! It had the perfect blend of spices and flavors. Truly authentic!"</p>
                    <span className="author">- Muqeet</span>
                </div>
                <div className="stars">
                    ★★★★★
                </div>
            </div>
            <div className="testimonial">
                <div className="testimonial-textbox">
                    <p>"The Butter Chicken was creamy, flavorful and just amazing! It was a hit with my whole family. Highly recommend!"</p>
                    <span className="author">- Amer</span>
                </div>
                <div className="stars">
                    ★★★★★
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
