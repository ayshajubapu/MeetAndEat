
import './ContactPage.css';

function ContactPage() {
  return (
    <div className="contact-page">
      <div className="contact-info">
        <div className="contact-item">
          <div className="icon email-icon"></div>
          <h3>EMAIL</h3>
          <p>fooddelivery@mail.com</p>
          <p>deliveryfood@mail.com</p>
        </div>
        <div className="contact-item">
          <div className="icon address-icon"></div>
          <h3>ADDRESS</h3>
          <p>3891 Ranchview Dr, Richardson, Texas, United States of America</p>
        </div>
        <div className="contact-item">
          <div className="icon phone-icon"></div>
          <h3>PHONE</h3>
          <p>+1 881 235 6278</p>
          <p>+1 881 235 6284</p>
        </div>
      </div>

      <div className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="tel" name="phone" placeholder="Phone No." />
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="map">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d356.6!2d80.0532121!3d26.4215311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDI0JzQ0LjMiTiA4MMKwMDMnMDUuNSJX!5e0!3m2!1sen!2sus!4v1690915127382!5m2!1sen!2sus"
          width="400"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactPage;
