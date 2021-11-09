import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cip4lgp",
        "template_oy3i7sr",
        formRef.current,
        "user_N1AmFuVmVoe2nXvtR6VBK"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +62 123 123 212
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              ahmad.rpl001@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              Sleman, Yogyakarta, Indonessia
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Lorem ipsum dolor sit.?</b> Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Eum, voluptate.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="email" name="user_email" />
            <textarea
              name="message"
              id=""
              rows="5"
              placeholder="message"
            ></textarea>
            <button>Submit</button>
            {done && "  Thankyou"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
