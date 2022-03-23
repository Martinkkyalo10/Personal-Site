import React, { Fragment } from "react";
import HeroImage from "./Hero";

export default function Header() {
  return (
    <Fragment>
      <header className='freelancre valign'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <HeroImage />
            </div>
          </div>
          <div className='col-lg-8 valign'>
            <div className='cont'>
              <h1 className='cd-headline clip'>
                Hello, My name is Martin. I love design and develop beautiful
                and responsive websites and mobile apps. i hope to make awesome
                designs and also i create a
                <span className='cd-words-wrapper'>
                  <div
                    className='Typewriter'
                    data-testid='typewriter-wrapper'
                  />
                </span>
              </h1>
            </div>
          </div>
        </div>
        <div className='states'>
          <div className='container'>
            <ul className='flex'>
              <li className='flex'>
                <div className='numb valign'>
                  <h3>12</h3>
                </div>
                <div className='text valign'>
                  <p>
                    Years <br /> Of Experience
                  </p>
                </div>
              </li>
              <li className='flex'>
                <div className='numb valign'>
                  <h3>165</h3>
                </div>
                <div className='text valign'>
                  <p>
                    Projects Completed <br /> In 19 Countries
                  </p>
                </div>
              </li>
              <li className='mail-us'>
                <a href='mailto:your@email.com?subject=Subject'>
                  <div className='flex'>
                    <div className='text valign'>
                      <div className='full-width'>
                        <p>Get In Touch</p>
                        <h6>Martinkkyalo10@gmail.com</h6>
                      </div>
                    </div>
                    <div className='mail-icon'>
                      <div className='icon-box'>
                        <span className='icon color-font pe-7s-mail' />
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='line bottom left' />
      </header>
    </Fragment>
  );
}
