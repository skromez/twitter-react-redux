import React from "react"
import logo from "./img/header/logo.svg"
import cover from "./img/cover/cover.jpg"
import avatar from "./img/profile/avatar.jpg"

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <div className="container container--normal header__container">
          <div className="header__logo logo">
            <img src={logo} alt="Logo" className="logo__icon" />
            <p className="logo__name">Guccitter</p>
          </div>
          <div className="header__auth auth">
            <button type="button" className="auth__button auth__button--login">
              Login
            </button>
            <button type="button" className="auth__button auth__button--signup">
              Sign Up
            </button>
          </div>
        </div>
      </header>
      <section className="cover">
        <div className="container cover__container">
          <img src={cover} alt="" className="cover__image" />
        </div>
        <article className="profile">
          <div className="container container--normal profile__container">
            <img src={avatar} alt="" className="profile__avatar" />
            <ul className="profile__list">
              <li className="profile__item profile__item--name">
                Kirill Petrov
              </li>
              <li className="profile__item profile__item--nick">@kpetrov</li>
            </ul>
            <ul className="profile__list">
              <li className="profile__item profile__item--registration">
                Since August 2009
              </li>
              <li className="profile__item profile__item--location">
                Sochi, Russia
              </li>
            </ul>
          </div>
        </article>
      </section>
    </div>
  )
}

export default App
