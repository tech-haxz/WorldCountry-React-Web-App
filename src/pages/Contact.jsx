export const Contact = () => {
  const handleFormSubmit = (formData) => {
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };
  return (
    <section className="section-contact container">
      <h2 className="container-title">Contact Us</h2>

      <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
          <input
            type="text"
            required
            autoComplete="false"
            placeholder="Enter your name"
            name="username"
            className="form-control"
          />

          <input
            type="email"
            name="email"
            required
            autoComplete="false"
            className="form-control"
            placeholder="Enter your email"
          />
          <textarea
            name="message"
            rows="10"
            placeholder="Enter your message"
            className="form-control"
            autoComplete="false"
            required
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};
