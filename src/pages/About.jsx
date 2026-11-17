
import { useEffect, useState } from "react";

function About() {
  const [showAlert, setShowAlert] = useState(true);

  // Hide success message after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="about">
      <h1>About Us</h1>

      {showAlert && (
        <div className="success-message">
          Your message has been sent successfully!
        </div>
      )}
    </section>
  );
}

export default About;
