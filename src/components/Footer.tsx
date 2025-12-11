import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Twitter, Mail, Phone, MapPin } from "lucide-react";

const connectLinks = [
  { name: "Become a Member", path: "/contact" },
  { name: "Prayer Request", path: "/contact" },
  { name: "First Timers", path: "/contact" },
  { name: "Second Timers", path: "/contact" },
  { name: "Online Community", path: "/contact" },
];

const ministriesLinks = [
  { name: "Kingdom Herald Global Worship", path: "/ministries/wwwe-experience" },
  { name: "Kingdom Herald Global Teens", path: "/ministries/young-ministers-clinic" },
  { name: "Kingdom Herald Global Kids", path: "/ministries/new-wine-bootcamp" },
];

const resourcesLinks = [
  { name: "Membership Classes", path: "/contact" },
  { name: "Celebrations", path: "/contact" },
  { name: "Counselling", path: "/contact" },
  { name: "Pre-Marital Counselling", path: "/contact" },
  { name: "Post-Marital Counselling", path: "/contact" },
  { name: "New Campus Volunteers", path: "/contact" },
  { name: "Welfare Request", path: "/contact" },
  { name: "Media", path: "/sermons" },
  { name: "Watch Online", path: "/sermons" },
  { name: "Sermons", path: "/sermons" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const Footer = () => {
  return (
    <footer className="bg-midnight text-cream">
      {/* Main Footer */}
      <div className="container-custom mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Logo & Contact */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
                <span className="text-midnight font-heading font-bold text-2xl">K</span>
              </div>
              <div>
                <span className="text-gold font-heading text-xl font-semibold block">
                  Kingdom Heralders
                </span>
                <span className="text-cream/70 text-sm">Global Ministries</span>
              </div>
            </Link>
            <p className="text-cream/70 mb-6 max-w-sm leading-relaxed">
              Reaching a Billion Souls in Ten Thousand Cities with the message of the gospel.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-cream/70">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-sm">
                  No. 1 Udoidiong Street, Ikot Okoro Road, Obio Akpa, Oruk Anam
                </span>
              </div>
              <div className="flex items-center gap-3 text-cream/70">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-sm">+234 802 665 7335, 08152140777</span>
              </div>
              <div className="flex items-center gap-3 text-cream/70">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-sm">kingdomheraldersministries@gmail.com</span>
              </div>
            </div>
            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-midnight-light flex items-center justify-center text-cream/70 hover:bg-gold hover:text-midnight transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-gold font-heading font-semibold text-lg mb-4">Connect</h4>
            <ul className="space-y-2">
              {connectLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-cream/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ministries */}
          <div>
            <h4 className="text-gold font-heading font-semibold text-lg mb-4">Ministries</h4>
            <ul className="space-y-2">
              {ministriesLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-cream/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-gold font-heading font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              {resourcesLinks.slice(0, 6).map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-cream/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-midnight-lighter">
        <div className="container-custom mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-cream/50 text-sm text-center md:text-left">
              © Copyright 2025 <span className="text-gold">Kingdom Heralders Global Ministries</span>.
              All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/contact" className="text-cream/50 hover:text-gold text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/contact" className="text-cream/50 hover:text-gold text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
