import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import Menu from "./Menu";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav>
      <ul>
        {/* Logo on the left */}
        <li>
          <Link href="/">
            <div className="nav-item nav-left">JE.</div>
          </Link>
        </li>
        <li className="nav-links">
          <Menu />
        </li>

        {/* Text on the right */}
        <li>
          <Link href="/">
            <span className="nav-item nav-right">STELLA</span>
          </Link>

          {/* Mobile menu button and menu */}
        </li>
        <li className="nav-menu">
          {isMobileMenuOpen ? (
            <FaTimes color="#e4e3e3" size={23} onClick={toggleMobileMenu} />
          ) : (
            <FaBars color="#e4e3e3" size={23} onClick={toggleMobileMenu} />
          )}

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="nav-menu-mobile">
              <div className="nav-menu-mobile-links">
                <Menu />
              </div>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
