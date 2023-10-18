import React, { useEffect, useState } from "react";
import "./Menu.css";
import "./General.css";
import { useInView } from "react-intersection-observer";

const Menu = () => {
    const [isBiryaniVisible, setBiryaniVisible] = useState(false);
    const [biryaniRef, biryaniInView, biryaniEntry] = useInView({
      threshold: 0.2,
    });
  
    useEffect(() => {
      if (biryaniEntry && biryaniEntry.isIntersecting) {
        setBiryaniVisible(true);
      } else {
        setBiryaniVisible(false);
      }
    }, [biryaniEntry]);

  // Haleem Section
  const [isHaleemVisible, setHaleemVisible] = useState(false);
  const [haleemRef, haleemInView, haleemEntry] = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (haleemEntry && haleemEntry.isIntersecting) {
      setHaleemVisible(true);
    } else {
      setHaleemVisible(false);
    }
  }, [haleemEntry]);

  // Gravies Section
  const [isGraviesVisible, setGraviesVisible] = useState(false);
  const [graviesRef, graviesInView, graviesEntry] = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (graviesEntry && graviesEntry.isIntersecting) {
      setGraviesVisible(true);
    } else {
      setGraviesVisible(false);
    }
  }, [graviesEntry]);

  // Desserts and Salads Section
  const [isDessertsVisible, setDessertsVisible] = useState(false);
  const [dessertsRef, dessertsInView, dessertsEntry] = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (dessertsEntry && dessertsEntry.isIntersecting) {
      setDessertsVisible(true);
    } else {
      setDessertsVisible(false);
    }
  }, [dessertsEntry]);

  return (
    <div className="menu-wrapper">
      <div className="menu">
        <h1 className="underline">Menu</h1>

        {/* Biriyani Section */}
        <div
          className={`menu-section ${isBiryaniVisible ? "visible" : ""}`}
          ref={biryaniRef}
        >
          <div className="menu-content left">
            <div className="menu-text">
              <h2 className="underline">Biriyani</h2>
              <p className="italic-description">
                "A flavorful and aromatic rice dish made with aromatic spices and meat."
              </p>
            </div>
            <img src={"/Biriyani.jpg"} alt="Biriyani" className="menu-image" />
          </div>
          <table className="menu-table right">
            <thead>
              <tr>
                <th>MENU</th>
                <th>HALF</th>
                <th>FULL</th>
                <th>TR/FP</th>
              </tr>
            </thead>
            <tbody>
              <tr className="section-title">
                <td colSpan="4">Hyderabadi Dum Biryani</td>
              </tr>
              <tr>
                <td>Mutton Biryani</td>
                <td>$80</td>
                <td>$160</td>
                <td>$50</td>
              </tr>
              <tr>
                <td>Chicken Biryani</td>
                <td>$65</td>
                <td>$130</td>
                <td>$35</td>
              </tr>

              <tr className="section-title">
                <td colSpan="4">Sufiyani (White) Biryani</td>
              </tr>
              <tr>
                <td>Mutton Biryani</td>
                <td>$80</td>
                <td>$160</td>
                <td>$50</td>
              </tr>
              <tr>
                <td>Chicken Biryani</td>
                <td>$65</td>
                <td>$130</td>
                <td>$35</td>
              </tr>

              <tr className="standalone-dish">
                <td>Vegetable Biryani</td>
                <td>$50</td>
                <td>$100</td>
                <td>$30</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Haleem Section */}
        <div
          className={`menu-section ${isHaleemVisible ? "visible" : ""}`}
          ref={haleemRef}
        >
          <div className="menu-content right">
            <div className="menu-text">
              <h2 className="underline">Haleem and Others</h2>
              <p className="italic-description">
                "A rich and hearty stew made with meat, lentils, and spices, slow-cooked to perfection."
              </p>
            </div>
            <img src={"/Haleem.jpg"} alt="Haleem" className="menu-image" />
          </div>
          <table className="menu-table left">
            <thead>
              <tr>
                <th>MENU</th>
                <th>HALF</th>
                <th>FULL</th>
                <th>TR/FP</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mutton Haleem</td>
                <td>$80</td>
                <td>$160</td>
                <td>$50</td>
              </tr>
              <tr>
                <td>Chicken Haleem</td>
                <td>$60</td>
                <td>$120</td>
                <td>$40</td>
              </tr>
              <tr>
                <td>Beef Haleem</td>
                <td>$80</td>
                <td>$160</td>
                <td>$50</td>
              </tr>
              <tr>
                <td>Mutton Marag</td>
                <td>$80</td>
                <td>$160</td>
                <td>$50</td>
              </tr>
              <tr>
                <td>Zaban/Paya</td>
                <td>$90</td>
                <td>$180</td>
                <td>$50</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Gravies Section */}
        <div
          className={`menu-section ${isGraviesVisible ? "visible" : ""}`}
          ref={graviesRef}
        >
          <div className="menu-content left">
            <div className="menu-text">
              <h2 className="underline">Gravies</h2>
              <p className="italic-description">
                "A variety of rich and flavorful gravies made with fresh ingredients and aromatic spices."
              </p>
            </div>
            <img src={"/Gravies.jpg"} alt="Gravies" className="menu-image" />
          </div>
          <table className="menu-table right">
            <thead>
              <tr>
                <th>MENU</th>
                <th>HALF</th>
                <th>FULL</th>
                <th>TR/FP</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Red Chicken</td>
                <td>$60</td>
                <td>$120</td>
                <td>$35</td>
              </tr>
              <tr>
                <td>Afgani Chicken</td>
                <td>$60</td>
                <td>$120</td>
                <td>$35</td>
              </tr>
              <tr>
                <td>Butter Chicken</td>
                <td>$70</td>
                <td>$140</td>
                <td>$40</td>
              </tr>
              <tr>
                <td>Chicken 65</td>
                <td>$75</td>
                <td>$150</td>
                <td>$45</td>
              </tr>
              <tr>
                <td>Dum Ka Mutton</td>
                <td>$90</td>
                <td>$180</td>
                <td>$50</td>
              </tr>
              <tr>
                <td>Paneer Butter Masala</td>
                <td>$60</td>
                <td>$120</td>
                <td>$40</td>
              </tr>
              <tr>
                <td>Palak Paneer</td>
                <td>$60</td>
                <td>$120</td>
                <td>$40</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Desserts and Salads Section */}
        <div
          className={`menu-section ${isDessertsVisible ? "visible" : ""}`}
          ref={dessertsRef}
        >
          <div className="menu-content right">
            <div className="menu-text">
              <h2 className="underline">Desserts and Salads</h2>
              <p className="italic-description">
                "Delicious and traditional desserts along with refreshing salads."
              </p>
            </div>
            <img src={"/Desserts.jpg"} alt="Desserts" className="menu-image" />
          </div>
          <table className="menu-table left">
            <thead>
              <tr>
                <th>MENU</th>
                <th>HALF</th>
                <th>FULL</th>
                <th>TR/FP</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Double Ka Meetha</td>
                <td>$60</td>
                <td>$120</td>
                <td>$35</td>
              </tr>
              <tr>
                <td>Khubani Ka Meetha</td>
                <td>$60</td>
                <td>$120</td>
                <td>$35</td>
              </tr>
              <tr>
                <td>Kheer</td>
                <td>$65</td>
                <td>$130</td>
                <td>$40</td>
              </tr>
              <tr>
                <td>Russian Salad</td>
                <td>$50</td>
                <td>$100</td>
                <td>$30</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Menu;
