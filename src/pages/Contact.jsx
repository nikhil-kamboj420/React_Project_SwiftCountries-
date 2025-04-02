import { useState } from "react";
import { Popup } from "../components/UI/Popup";
export const Contact = () => {
  const [formData, setFormData] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const sectionStyles = "section-contact";
  const handleFormSubmit = (formData) => {
    const formInputData = Object.fromEntries(formData.entries());
    setFormData(formInputData);
    setShowPopup(true);
  };

  return (
    <>
      <Popup
        formData={formData}
        showPopup={showPopup}
        setShowPopup={setShowPopup}
      />
      <section className={showPopup ? "blur" : sectionStyles}>
        <h2 className="container-title">Contact Us</h2>

        <div className="contact-wrapper container">
          <form action={handleFormSubmit}>
            <input
              type="text"
              className="form-control"
              name="username"
              placeholder="Enter your name"
              required
              autoComplete="off"
            />
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter your email"
              required
              autoComplete="off"
            />
            <textarea
              rows="10"
              className="form-control"
              name="message"
              placeholder="Enter your message"
              required
              autoComplete="off"
            ></textarea>
            <button type="submit" className="btn btn-primary" value="send">
              Send
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
