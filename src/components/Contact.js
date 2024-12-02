import React from 'react';

const Contact = () => {
  return (
    <section id="contact" style={{ padding: '20px' }}>
      <h2>Contact Us</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
