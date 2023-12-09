import React from 'react'
import Order from './Order'
const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <div>
      <footer className="footer">
        {isOpen ? (
         <Order closeHour = {closeHour}></Order>
        ):<p>We are closed right now...</p>}
      </footer>
    </div>
  );
}

export default Footer
