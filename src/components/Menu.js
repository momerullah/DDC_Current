import React from 'react';
import './Menu.css';

const Menu = () => {
    return (
        <div className="menu-wrapper">
            <div className="menu">
                <h1>Menu</h1>
                
                {/* Biriyani Section */}
                <div className="menu-section">
                    <div className="menu-text left">
                        <h2 className="fancy-underline">Biriyani</h2>
                        <p className="italic-description">"A flavorful and aromatic rice dish made with aromatic spices and meat."</p>
                    </div>
                    <img src={'/Biriyani.jpg'} alt="Biriyani" className="menu-image right" />
                    <table className="menu-table left">
                        <thead>
                            <tr>
                                <th>MENU</th>
                                <th>HALF/FULL TRAY</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>Mutton Biriyani</td><td>$80/$160</td></tr>
                            <tr><td>Chicken Biriyani</td><td>$60/$120</td></tr>
                        </tbody>
                    </table>
                </div>

                {/* Haleem Section */}
                <div className="menu-section">
                    <img src={'/Haleem.jpg'} alt="Haleem" className="menu-image left" />
                    <div className="menu-text right">
                        <h2 className="fancy-underline">Haleem</h2>
                        <p className="italic-description">"A rich and hearty stew made with meat, lentils, and spices, slow-cooked to perfection."</p>
                    </div>
                    <table className="menu-table right">
                        <thead>
                            <tr>
                                <th>MENU</th>
                                <th>HALF/FULL TRAY</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>Mutton Haleem</td><td>$80/$160</td></tr>
                            <tr><td>Chicken Haleem</td><td>$60/$120</td></tr>
                        </tbody>
                    </table>
                </div>

                {/* Gravies Section */}
                <div className="menu-section">
                    <div className="menu-text left">
                        <h2 className="fancy-underline">Gravies</h2>
                        <p className="italic-description">"A variety of rich and flavorful gravies made with fresh ingredients and aromatic spices."</p>
                    </div>
                    <img src={'/Gravies.jpg'} alt="Gravies" className="menu-image right" />
                    <table className="menu-table left">
                        <thead>
                            <tr>
                                <th>MENU</th>
                                <th>HALF/FULL TRAY</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>Red Chicken Gravy</td><td>$60/$120</td></tr>
                            <tr><td>Butter Chicken</td><td>$70/$140</td></tr>
                            <tr><td>Afghani Chicken (Green Chicken Gravy)</td><td>$60/$120</td></tr>
                        </tbody>
                    </table>
                </div>

                {/* Marag/Paya Section */}
                <div className="menu-section">
                    <img src={'/Marag.jpeg'} alt="Marag/Paya" className="menu-image left" />
                    <div className="menu-text right">
                        <h2 className="fancy-underline">Marag/Paya</h2>
                        <p className="italic-description">"Delicious and nutritious traditional soups made with tender meat and flavorful spices."</p>
                    </div>
                    <table className="menu-table right">
                        <thead>
                            <tr>
                                <th>MENU</th>
                                <th>HALF/FULL TRAY</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>Mutton Marag</td><td>$80/$160</td></tr>
                            <tr><td>Hyderabadi Paya</td><td>$90/$180</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Menu;
