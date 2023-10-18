import React, { useEffect, useState } from 'react';
import './Contact.css';
import './General.css'; // Import General.css
import { useInView } from 'react-intersection-observer';

const Contact = () => {
    const [isContactVisible, setContactVisible] = useState(false);
    const [contactRef, contactInView, contactEntry] = useInView({
      threshold: 0.2,
    });
  
    useEffect(() => {
      if (contactEntry && contactEntry.isIntersecting) {
        setContactVisible(true);
      } else {
        setContactVisible(false);
      }
    }, [contactEntry]);

  return (
    <section
  id="contact"
  className={`info-section ${isContactVisible ? 'visible' : ''}`}
  ref={contactRef}
>

      <div className="inner-section">
        <h2>Contact Us</h2>
        <p>
          Phone: <a href="tel:630-426-7001">630-426-7001</a>
        </p>
        <p>
          We are always happy to assist you with your queries and orders. Feel
          free to contact us for any information or assistance you may need.
        </p>
      </div>
    </section>
  );
};

export default Contact;
