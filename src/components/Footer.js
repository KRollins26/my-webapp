import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Thanks for visiting my portfolio website!
        </p>
      </section>
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
