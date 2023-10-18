import React, { useEffect, useState } from 'react';
import './Testimonials.css';
import './General.css'; // Import General.css
import { useInView } from 'react-intersection-observer';

const Testimonials = () => {
  const [isTestimonialsHeadingVisible, setTestimonialsHeadingVisible] = useState(false);
  const [testimonialsHeadingRef, testimonialsHeadingInView, testimonialsHeadingEntry] = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (testimonialsHeadingEntry && testimonialsHeadingEntry.isIntersecting) {
      setTestimonialsHeadingVisible(true);
    } else {
      setTestimonialsHeadingVisible(false);
    }
  }, [testimonialsHeadingEntry]);

  const [isTestimonial1Visible, setTestimonial1Visible] = useState(false);
  const [testimonial1Ref, testimonial1InView, testimonial1Entry] = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (testimonial1Entry && testimonial1Entry.isIntersecting) {
      setTestimonial1Visible(true);
    } else {
      setTestimonial1Visible(false);
    }
  }, [testimonial1Entry]);

  const [isTestimonial2Visible, setTestimonial2Visible] = useState(false);
  const [testimonial2Ref, testimonial2InView, testimonial2Entry] = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (testimonial2Entry && testimonial2Entry.isIntersecting) {
      setTestimonial2Visible(true);
    } else {
      setTestimonial2Visible(false);
    }
  }, [testimonial2Entry]);

  const [isTestimonial3Visible, setTestimonial3Visible] = useState(false);
  const [testimonial3Ref, testimonial3InView, testimonial3Entry] = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (testimonial3Entry && testimonial3Entry.isIntersecting) {
      setTestimonial3Visible(true);
    } else {
      setTestimonial3Visible(false);
    }
  }, [testimonial3Entry]);

  return (
    <section
      id="testimonials"
      className={`inner-section ${isTestimonialsHeadingVisible ? 'visible' : ''}`}
      ref={testimonialsHeadingRef}
    >
      <h2 className="testimonial-heading">Testimonials</h2>

      <div className={`testimonial ${isTestimonial1Visible ? 'visible' : ''}`} ref={testimonial1Ref}>
        <div className="testimonial-textbox">
          <p>
            "The Hyderabadi Dum Mutton Biriyani was absolutely delicious! It
            had the perfect blend of spices and flavors. Truly authentic!"
          </p>
          <span className="author">- Muqeet</span>
        </div>
        <div className="stars">★★★★★</div>
      </div>

      <div className={`testimonial ${isTestimonial2Visible ? 'visible' : ''}`} ref={testimonial2Ref}>
        <div className="testimonial-textbox">
          <p>
            "The food was really good, authentic hyderabadi taste that we were
            expecting! The quality and the portions of meat exceeded our
            expectations Jazakallah! Good luck with your business and we will
            definitely order again!"
          </p>
          <span className="author">- Tauseef</span>
        </div>
        <div className="stars">★★★★★</div>
      </div>

      <div className={`testimonial ${isTestimonial3Visible ? 'visible' : ''}`} ref={testimonial3Ref}>
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
