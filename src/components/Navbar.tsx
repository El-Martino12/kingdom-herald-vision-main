import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const campuses = [
  { name: "Akwa Ibom State Polytechnic", path: "/campuses/akwa-ibom-poly" },
  { name: "University of Uyo", path: "/campuses/university-of-uyo" },
  { name: "Federal University of Agriculture Ikot Abasi", path: "/campuses/fua-ikot-abasi" },
  { name: "Akwa Ibom State University Ikot Akpaden", path: "/campuses/aksu-ikot-akpaden" },
  { name: "Bonny Island, Port Harcourt", path: "/campuses/bonny-island" },
];

const ministries = [
  { name: "WWWE Experience Program", path: "/ministries/wwwe-experience" },
  { name: "Young Ministers' Clinic", path: "/ministries/young-ministers-clinic" },
  { name: "New Wine Bootcamp", path: "/ministries/new-wine-bootcamp" },
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Campuses", path: "/campuses", dropdown: campuses },
  { name: "Ministries", path: "/ministries", dropdown: ministries },
  { name: "Sermons", path: "/sermons" },
  { name: "Give", path: "/give" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-midnight/95 backdrop-blur-md border-b border-midnight-lighter">
      <div className="container-custom mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <span className="text-midnight font-heading font-bold text-xl">K</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-gold font-heading text-lg font-semibold">Kingdom Heralders</span>
              <span className="block text-cream/70 text-xs">Global Ministries</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.dropdown ? "#" : link.path}
                  onClick={(e) => link.dropdown && e.preventDefault()}
                  className={cn(
                    "px-4 py-2 text-sm font-medium transition-colors flex items-center gap-1 rounded-md",
                    isActive(link.path)
                      ? "text-gold"
                      : "text-cream/80 hover:text-gold hover:bg-midnight-light"
                  )}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown */}
                {link.dropdown && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-midnight border border-midnight-lighter rounded-lg shadow-xl py-2 animate-fade-up z-50">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-4 py-2.5 text-sm text-cream/80 hover:text-gold hover:bg-midnight-light transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-cream"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-midnight-lighter animate-fade-up">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.dropdown ? (
                  <div>
                    <button
                      onClick={() =>
                        setActiveDropdown(activeDropdown === link.name ? null : link.name)
                      }
                      className="w-full flex items-center justify-between px-4 py-3 text-cream/80 hover:text-gold transition-colors"
                    >
                      {link.name}
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform",
                          activeDropdown === link.name && "rotate-180"
                        )}
                      />
                    </button>
                    {activeDropdown === link.name && (
                      <div className="pl-4 pb-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-2 text-sm text-cream/60 hover:text-gold transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block px-4 py-3 transition-colors",
                      isActive(link.path) ? "text-gold" : "text-cream/80 hover:text-gold"
                    )}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
