import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer__container'>
      <div className='footer__main'>
        <div className='footer__logo'>
          Footer logo section
        </div>
        <div className='footer__steam-lab'>
          Steam Lab menus
        </div>
        <div className='footer__legal'>
          Legal stuff blah blah
        </div>
      </div>
      <div className='footer__copyright'>
        ©2022 All Rights Reserved, mrreedsteamlab.com
      </div>
    </div>
  );
};

export default Footer;
