import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCut, faVideo, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import './Offerings.css'

const iconStyling = {
  padding: '16px'
}

const Offerings = () => {
  return (
    <div className='offerings__container'>
        <div className='offerings'>
          <div className='offerings-left'>
            <div className='video-icon'>
              <FontAwesomeIcon icon={faVideo} color='white' size='3x' style={iconStyling} />
            </div>
            <div className='offerings__text'>
              <span className='offerings__large-text'>Videos</span>
              <span>42 challenge videos (6 per grade-level, K-6)</span><br />
            </div>
          </div>
          <div className='offerings-center'>
            <div className='file-icon'>
              <FontAwesomeIcon icon={faFileAlt} color='white' size='3x' style={iconStyling} />
            </div>
            <div className='offerings__text'>
              <span className='offerings__large-text'>Resources</span>
              <span>Additional teacher resource documents for extension and enrichment</span>
            </div>
          </div>
          <div className='offerings-right'>
            <div className='scissors-icon'>
              <FontAwesomeIcon icon={faCut} color='white' size='3x' style={iconStyling} />
            </div>
            <div className='offerings__text'>
              <span className='offerings__large-text'>Materials</span>
              <span>Designed for easy implementation with easy-to-find materials</span>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Offerings;
