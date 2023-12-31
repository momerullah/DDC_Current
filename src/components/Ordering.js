import React, { useEffect, useState } from 'react';
import './Ordering.css';
import './General.css'; // Import General.css
import { useInView } from 'react-intersection-observer';

const Ordering = () => {
    const [isOrderingVisible, setOrderingVisible] = useState(false);
    const [orderingRef, orderingInView, entry] = useInView({
      threshold: 0.2,
    });
  
    useEffect(() => {
      if (entry && entry.isIntersecting) {
        setOrderingVisible(true);
      } else {
        setOrderingVisible(false);
      }
    }, [entry]);

  return (
    <section
  id="ordering"
  className={`info-section ${isOrderingVisible ? 'visible' : ''}`}
  ref={orderingRef}
>

      <div className="inner-section">
        <h2>How to Order</h2>
        <p>
          To place your order, please call:{' '}
          <a href="tel:630-426-7001">630-426-7001</a>
        </p>
        <p className="note">
          <strong>Note:</strong> All orders should be placed on or before
          Thursdays. Pick up is on weekends from Aurora IL.
        </p>
        <ul>
          <li>Explore our menu and choose your favorite dishes.</li>
          <li>Call us to place your order before Thursday.</li>
          <li>Pick up your freshly prepared order on the weekend.</li>
          <li>Enjoy the rich and authentic flavors of our Hyderabadi cuisine!</li>
        </ul>
      </div>
    </section>
  );
};

export default Ordering;
