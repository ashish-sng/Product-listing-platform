import React from 'react'
import "./Signup.css"
import mail from "../../../assets/icons/mail.png"
import password from "../../../assets/icons/password.png"
import mobile from "../../../assets/icons/mobile.png"
import user from "../../../assets/icons/user.png"

const Signup = () => {
  return (
    <div className="popup__signup">
      <div className="popup__signup__header">
        <h1>Feedback</h1>
        <h3>Add your products and give us your valuable feedback</h3>
      </div>
      <form className="popup__signup__form">
        <div className="popup__signup__form__name__input">
          <img src={user} alt="user" />
          <input type="text" placeholder="Name" />
        </div>
        <div className="popup__signup__form__email__input">
          <img src={mail} alt="mail" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="popup__signup__form__mobile__input">
          <img src={mobile} alt="mobile" />
          <input type="number" placeholder="Mobile" />
        </div>
        <div className="popup__signup__form__password__input">
          <img src={password} alt="password" />
          <input type="password" placeholder="Password" />
        </div>
        <div className="popup__signup__form__footer">
          <span>Already have an account?</span>
          <a href="#">Login</a>
        </div>
        <button type="submit" className="popup__form__signup__button">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup