import React from "react";
import SemiNavbar from "../Components/Navbar/SemiNavbar";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <SemiNavbar />
      <section className="not-found">
        <div className="container">
          <h1>404 Error</h1>
          <p>Soory, the page you are looking for doesn't exist.</p>

          <Link className="return-home-btn" to="/">
            Return to Home
          </Link>
        </div>
      </section>
    </>
  );
}

export default NotFound;
