import React from "react";
import avatar from "./img/profile/avatar.jpg";
import like from "./img/tweet/like.svg";
import avatar1 from "./img/tweet-modal/avatar1.jpg";
import avatar2 from "./img/tweet-modal/avatar2.jpg";
import avatar3 from "./img/tweet-modal/avatar3.jpg";
import Header from "./components/Header";
import Cover from "./components/Cover";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Cover />
      <Main />
      {/* <main className="main">
        <div className="container container--normal main__container">
          <Profile />
          <div className="feed">
            <div className="tweets">
              <input
                id="tweets"
                className="tweets__radio"
                type="radio"
                defaultChecked
              />
              <label htmlFor="tweets" className="tweets__label label">
                <p className="label__tweets">Tweets</p>
                <p className="label__amount">15</p>
              </label>
            </div>
            <ul className="feed__list">
              <li className="feed__item tweet">
                <img src={avatar} alt="" className="tweet__thumb" />
                <div className="tweet__wrapper">
                  <div className="tweet__info">
                    <p className="tweet__heading tweet__heading--name">
                      Dmitry Novikov
                    </p>
                    <p className="tweet__heading tweet__heading--nick">
                      @skromez
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
                    <p className="like__text like__text--amount">15</p>
                  </button>
                </div>
              </li>
              <li className="feed__item tweet">
                <img src={avatar} alt="" className="tweet__thumb" />
                <div className="tweet__wrapper">
                  <div className="tweet__info">
                    <p className="tweet__heading tweet__heading--name">
                      Dmitry Novikov
                    </p>
                    <p className="tweet__heading tweet__heading--nick">
                      @skromez
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
                    <p className="like__text like__text--amount">15</p>
                  </button>
                </div>
              </li>
              <li className="feed__item tweet">
                <img src={avatar} alt="" className="tweet__thumb" />
                <div className="tweet__wrapper">
                  <div className="tweet__info">
                    <p className="tweet__heading tweet__heading--name">
                      Dmitry Novikov
                    </p>
                    <p className="tweet__heading tweet__heading--nick">
                      @skromez
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
                    <p className="like__text like__text--amount">15</p>
                  </button>
                </div>
              </li>
            </ul>
          </div>
          <div className="join-us">
            <img src={sticker} alt="Sticker" />

            <h2 className="join-us__heading">
              Hey! <br /> Why don't you join us?
            </h2>
            <p className="join-us__text">
              It's simple - just click on sign up
              <br /> button!
            </p>
            <button type="button" className="auth__button auth__button--signup">
              Sign Up
            </button>
          </div>
        </div>
      </main> */}

      <section className="tweet-modal tweet-modal--hidden">
        <div className="tweet-modal__container">
          <div className="tweet-modal__wrapper">
            <img src={avatar} alt="" className="tweet-modal__thumb" />
            <div className="tweet-modal__info">
              <p className="tweet-modal__heading tweet-modal__heading--name">
                Dmitry Novikov
              </p>
              <p className="tweet-modal__heading tweet-modal__heading--nick">
                @skromez
              </p>
            </div>
          </div>
          <p className="tweet-modal__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="tweet-modal__data">17:26 - 01 Aug. 2019</p>
          <div className="tweet-modal__likes likes">
            <p className="likes__amount">
              15 <span>Likes</span>
            </p>
            <img src={avatar1} alt="userpic" className="likes__user" />
            <img src={avatar2} alt="userpic" className="likes__user" />
            <img src={avatar3} alt="userpic" className="likes__user" />
          </div>
          <button type="button" className="tweet__like like">
            <img src={like} alt="" className="like__icon" />
            <p className="like__text like__text--amount">15</p>
          </button>
        </div>
      </section>
      <section className="signup signup--hidden">
        <div className="signup__container">
          <h1 className="signup__heading">Sign Up</h1>
          <form className="signup__form form-signup">
            <input
              className="form-signup__text"
              type="text"
              placeholder="First Name"
            />
            <input
              className="form-signup__text"
              type="text"
              placeholder="Last Name"
            />
            <input
              className="form-signup__text"
              type="text"
              placeholder="Nickname"
            />
            <input
              className="form-signup__text"
              type="text"
              placeholder="Location"
            />
            <button type="submit" className="form-signup__button">
              Sign Up
            </button>
          </form>
        </div>
      </section>
      <section className="login login--hidden">
        <div className="login__container">
          <h2 className="login__heading">Already signed up?</h2>
          <form className="login__form form-login">
            <input
              type="text"
              className="form-login__input form-login__input--text"
              placeholder="Login"
            />
            <input
              type="password"
              className="form-login__input form-login__input--password"
              placeholder="Password"
            />
            <label className="form-login__label">
              <input type="checkbox" className="form-login__checkbox" />
              <span className="form-login__checkmark" />
              Remember me
            </label>
            <button type="submit" className="form-login__button">
              Login
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default App;
