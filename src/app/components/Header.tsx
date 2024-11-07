// import Link from "next/link";

// const Header = () => (
//     <header>
//       <nav>
//         <div className="logo">🦋GoodHabit🦋</div>
//         <ul className="nav-links">
//         <Link href="/">Home</Link>
//           <Link href="/routes/about">About</Link>
//           <Link href="/routes/products">Products</Link>
//           <Link href="/routes/contact">Contact us</Link>
//         </ul>
//       </nav>
//     </header>
//   );
  
//   export default Header;
// React Component (Header.js)
'use client'
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav>
        <div className="logo">🦋GoodHabit🦋</div>
        
        {/* Hamburger Menu */}
        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Nav Links */}
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/routes/about">About</Link></li>
          <li><Link href="/routes/products">Products</Link></li>
          <li><Link href="/routes/contact">Contact us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
