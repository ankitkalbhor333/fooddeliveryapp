import React from 'react'
import './footer.css'

import {assets} from '../../assets/asset.js'
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehend
                erit odio accusamus nemo mollitia doloremque voluptas ab molestias quisquam ullam est neque magnam distinctio laboriosam,
                 dolore unde hic, eos obcaecati. Rem.</p>
                 <div className="footer-social-icon">
                    <img src={assets.whatappicon} alt="" />
                    <img src={assets.facebookicon} alt="" />
                    <img src={assets.youtubeicon} alt="" />
                 </div>
        </div>
        <div className="footer-content-center">
<h2>company </h2>
<ul>
    <li>home</li>
    <li>about us</li>
    <li>delivery</li>
    <li>privacy policy</li>
</ul>
        </div>
        <div className="footer-content-right">
            <h2>getting touch</h2>
            <ul>
                <li>+918817457938</li>
            
                <li>ankitkalbhor3@gmail.com</li>
                
            </ul>
        </div>
      </div>

      <hr />
      <p className="footer-copyright">
        Copyright 2024 @Tomato.com -All Right Reserved
      </p>
    </div>
  )
}

export default Footer
