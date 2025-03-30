export const Contact = () => {

    const handleFormSubmit = (formData)=>{
   const formInputData = Object.fromEntries(formData.entries());
    }

  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>

      <div className="contact-wrapper container">
      <form action={handleFormSubmit}>
        <input
          type="text"
          className="form-control"
          name="username"
          placeholder="Enter your name"
          required
          autoComplete="false"
        />
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="Enter your email"
          required
          autoComplete="false"
        />
        <textarea
          rows="10"
          className="form-control"
          name="message"
          placeholder="Enter your message"
          required
          autoComplete="false"
        ></textarea>
        <button type="submit" className="btn btn-primary" value="send">
          Send
        </button>
      </form>
      </div>
    </section>
  );
};
