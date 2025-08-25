import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css'; 

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles['footer-top']}>
                <div className={styles['footer-brand']}>
                    <h3>Bean Scene</h3>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text.
                    </p>
                    <div className={styles['social-icons']}>
                        <a href="#"><i className="fa fa-facebook" /></a>
                        <a href="#"><i className="fa fa-instagram" /></a>
                        <a href="#"><i className="fa fa-youtube" /></a>
                        <a href="#"><i className="fa fa-twitter" /></a>
                    </div>
                </div>

                <div className={styles['footer-links']}>
                    <div>
                        <h4>About</h4>
                        <Link to="/menu">Menu</Link>
                        <Link to="/aboutus">Features</Link>
                        <Link to="/contactus">Help & Supports</Link>
                    </div>
                    <div>
                        <h4>Company</h4>
                        <Link to="/aboutus">How we work</Link>
                        <Link to="/terms">Terms of Service</Link>
                        <Link to="/faq">FAQ</Link>
                    </div>
                    <div>
                        <h4>Contact Us</h4>
                        <p>
                            Akshya Nagar 1st Block 1st Cross, <br />
                            Rammurthy nagar, Bangalore-560016
                        </p>
                        <p><a href="tel:+12029182132">+1 202–918–2132</a></p>
                        <p><a href="mailto:beanscene@mail.com">beanscene@mail.com</a></p>
                        <p><a href="https://www.beanscene.com" target="_blank" rel="noopener noreferrer">www.beanscene.com</a></p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
