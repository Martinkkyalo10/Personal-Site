import React, { Fragment } from "react";

export default function Footer() {
  return (
    <Fragment>
      <footer className='sub-bg'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='item md-mb50'>
                <div className='title'>
                  <h5>Contact Info</h5>
                </div>
                <ul>
                  <li>
                    <span className='icon pe-7s-map-marker' />
                    <div className='cont'>
                      <h6>Officeal Address</h6>
                      <p>Enterprise Road - 00500, Nairobi</p>
                    </div>
                  </li>
                  <li>
                    <span className='icon pe-7s-mail' />
                    <div className='cont'>
                      <h6>Email </h6>
                      <p>Martinkkyalo10@gmail.com</p>
                    </div>
                  </li>
                  <li>
                    <span className='icon pe-7s-call' />
                    <div className='cont'>
                      <h6>Call Me</h6>
                      <p>+254715836392</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='item md-mb50'>
                <ul>
                  <li>
                    <div className='subscribe'>
                      <input type='text' placeholder='Type Your Email' />
                      <span className='subs pe-7s-paper-plane' />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='item'>
                <div className='logo'>
                  <img src='../../img/logo-light.png' alt />
                </div>
                <div className='social'>
                  <a href='#0'>
                    <i className='fab fa-facebook-f' />
                  </a>
                  <a href='#0'>
                    <i className='fab fa-twitter' />
                  </a>
                  <a href='#0'>
                    <i className='fab fa-instagram' />
                  </a>
                  <a href='#0'>
                    <i className='fab fa-youtube' />
                  </a>
                </div>
                <div className='copy-right'>
                  <p>
                    © 2022,
                    <a href='/'>Martin Kyalo</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className='progress-wrap cursor-pointer'>
        <svg
          className='progress-circle svg-content'
          width='100%'
          height='100%'
          viewBox='-1 -1 102 102'
        >
          <path d='M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98' />
        </svg>
      </div>
    </Fragment>
  );
}
