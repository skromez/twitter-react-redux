import React from "react";
import logo from "./img/header/logo.svg";
import cover from "./img/cover/cover.jpg";
import avatar from "./img/profile/avatar.jpg";
import thumb from "./img/tweet/thumb.jpg";
import like from "./img/tweet/like.svg";

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
      </section>
      <section className="tweets">
        <div className="container container--narrow tweets__container">
          <input id="tweets" className="tweets__radio" type="radio" checked />
          <label htmlFor="tweets" className="tweets__label label">
            <p className="label__tweets">Tweets</p>
            <p className="label__amount">15</p>
          </label>
        </div>
      </section>
      <section className="main">
        <div className="container container--normal main__container">
          <div className="profile">
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
          <div className="feed">
            <ul className="feed__list">
              <li className="feed__item tweet">
                <img src={thumb} alt="" className="tweet__thumb" />
                <div className="tweet__wrapper">
                  <div className="tweet__info">
                    <p className="tweet__heading tweet__heading--name">
                      Kirill Petrov
                    </p>
                    <p className="tweet__heading tweet__heading--nick">
                      @kpetrov
                    </p>
                    <p className="tweet__heading tweet__heading--data">1 Aug</p>
                  </div>
                  <p className="tweet__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <button type="button" className="tweet__like like">
                    <img src={like} alt="" className="like__icon" />
                    <p className="like__amount">15</p>
                  </button>
                </div>
              </li>
              <li className="feed__item tweet">
                <img src={thumb} alt="" className="tweet__thumb" />
                <div className="tweet__wrapper">
                  <div className="tweet__info">
                    <p className="tweet__heading tweet__heading--name">
                      Kirill Petrov
                    </p>
                    <p className="tweet__heading tweet__heading--nick">
                      @kpetrov
                    </p>
                    <p className="tweet__heading tweet__heading--data">1 Aug</p>
                  </div>
                  <p className="tweet__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <button type="button" className="tweet__like like">
                    <img src={like} alt="" className="like__icon" />
                    <p className="like__amount">15</p>
                  </button>
                </div>
              </li>
              <li className="feed__item tweet">
                <img src={thumb} alt="" className="tweet__thumb" />
                <div className="tweet__wrapper">
                  <div className="tweet__info">
                    <p className="tweet__heading tweet__heading--name">
                      Kirill Petrov
                    </p>
                    <p className="tweet__heading tweet__heading--nick">
                      @kpetrov
                    </p>
                    <p className="tweet__heading tweet__heading--data">1 Aug</p>
                  </div>
                  <p className="tweet__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <button type="button" className="tweet__like like">
                    <img src={like} alt="" className="like__icon" />
                    <p className="like__amount">15</p>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
