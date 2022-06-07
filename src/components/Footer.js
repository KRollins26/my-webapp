import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>

      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
                <a  href='https://www.instagram.com/kieranrollins/' 
                    target='_blank' 
                    rel='noreferrer' 
                    aria-label='Instagram'>Instagram
                </a>
                <a  href='https://github.com/KRollins26'   
                    target='_blank' 
                    rel='noreferrer' 
                    aria-label='GitHub'>GitHub
                </a>
                <a  href='https://www.linkedin.com/in/kieran-rollins/' 
                    target='_blank' 
                    rel='noreferrer'
                    aria-label='LinkedIn'>LinkedIn
                </a>
                <a  href='/' 
                    target='_blank' 
                    rel='noreferrer' 
                    aria-label='Twitter'>Twitter
                </a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <small class='website-rights'>KR © 2022</small>
          <div class='social-icons'>
            <a
              class='social-icon-link Github'
              href='https://github.com/KRollins26'
              target='_blank'
              rel='noreferrer' 
              aria-label='GitHub'
            >
              <i class="fa-brands fa-github"></i>
            </a>
            <a
              class='social-icon-link instagram'
              href='https://www.instagram.com/kieranrollins/'
              target='_blank'
              rel='noreferrer' 
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              rel='noreferrer' 
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </a>
            <a
              class='social-icon-link linkedin'
              href='https://www.linkedin.com/in/kieran-rollins/'
              target='_blank'
              rel='noreferrer' 
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
