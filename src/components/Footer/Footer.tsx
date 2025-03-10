import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/bandLogo.svg";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.newsletter}>
        <h2>sign up to our newsletter</h2>
        <p>
          be the first to know the latest releases, news, collaborations,
          exclusives and offers!
        </p>
        <div>
          <form className={styles.blockForm}>
            <input type="text" id="email" required />
            <label htmlFor="email">Your e-mail</label>
            <button>Sign up</button>
          </form>
        </div>
      </div>
      <div className={styles.footerInfo}>
        <div className={styles.container}>
          <div className={styles.container1}>
            <img src={logo} />
            <div className={styles.containerImages}>
              <a href="#" key="instagram">
                <Instagram />
              </a>
              <a href="#" key="facebook">
                <Facebook />
              </a>
              <a href="#" key="twitter">
                <Twitter />
              </a>
            </div>
          </div>
          <div className={styles.container2}>
            <h3>Company</h3>
            <ul>
              <li>
                <a href="#" key="about">
                  About
                </a>
              </li>
              <li>
                <a href="#" key="theStores">
                  The Stores
                </a>
              </li>
              <li>
                <a href="#" key="Jobs">
                  Jobs
                </a>
              </li>
              <li>
                <a href="#" key="privacyPolicy">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" key="Imprint">
                  Imprint
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.container3}>
            <h3>Customer service</h3>
            <ul>
              <li>
                <a href="#" key="contactUs">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" key="shipping">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" key="terms&Conditions">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" key="payment">
                  Payment
                </a>
              </li>
              <li>
                <a href="#" key="giftcards">
                  Giftcards
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.bottomText}>
        <div>
          <h3>SNEAKERS</h3>
          <p>
            Sneakers have always been associated with both comfort and style! No
            other category of shoes can give you the same vibe like a pair of
            hip sneakers. Sneakers are the type of shoes that see no gender,
            making them the perfect unisex choice. Both men and women can wear
            the same designs and styles. Isn’t that awesome! Titolo is your
            one-stop-shop for all the diverse varieties of sneakers out there,
            whether you are looking for classic, retro, streetwear, fashionable,
            or just functional styles. Can’t decide on what to buy? No worries,
            log in to Titoloshop.com and browse through our thousands of sneaker
            choices to find the right match for you. As someone wise once said,
            people make shoe contact before making eye contact; hence one can’t
            compromise sneakers!
          </p>
        </div>
        <div>
          <h3>STREETWEAR</h3>
          <p>
            Streetwear is a term for casual clothing that became global in the
            1990s. It all started in New York where fashion was influenced by
            hip-hop culture and skateboarders. The term quickly spread from New
            York to the rest of the world. Streetwear includes anything casual
            and comfortable, like baggy denim jeans, caps and sneakers.
            Streetwear style is constantly evolving and developing. In the past
            couple of years, 90s fashion has started to become trendy again and
            that decade is having a big influence on streetwear styles. The hype
            for trendy sneakers and the baggy jeans look is back – at least
            until the next trend comes along.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
