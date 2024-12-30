import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-3 mt-4">
      <div className="container text-center">
        <p className="mb-0">© 2024 Relatos de Papel. Todos los derechos reservados.</p>
        <p className="mb-0">
          Contactanos{" "}
          <a href="" className="footer-link">
            https:relatosdepapel.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;