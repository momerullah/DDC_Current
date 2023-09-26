import React from 'react';
import './App.css';
import Header from './components/Header'; // Adjust path if needed
import Menu from './components/Menu'; // Adjust path if needed
import Ordering from './components/Ordering'; // Adjust path if needed
import Contact from './components/Contact'; // Adjust path if needed
import Footer from './components/Footer'; // Adjust path if needed
import Testimonials from './components/Testimonials'; // Adjust path if needed

function App() {
    return (
        <div className="App">
            <section id="home">
                <Header />
            </section>
            <section id="menu">
                <Menu />
            </section>
            <section id="ordering">
                <Ordering />
            </section>
            <section id="contact">
                <Contact />
            </section>
            <section id="testimonials">
                <Testimonials />
            </section>
            <Footer />
        </div>
    );
}

export default App;
