import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="contact">
      <Link
        target="_blank"
        className="f"
        to="https://www.facebook.com/share/aVvFGufZATxC8z4t/?mibextid=qi2Omg"
      >
        Facebook
      </Link>
      <Link
        target="_blank"
        className="i"
        to="https://www.instagram.com/woodley_tk?utm_source=qr&igsh=MTBrN3dyN20zMzZueg=="
      >
        Instagram
      </Link>
      <Link target="_blank" className="w" to="https://wa.me/qr/E2ZV7CNFW2U5F1">
        Whatsapp
      </Link>
    </div>
  );
}

export default Contact;
