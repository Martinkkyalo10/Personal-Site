import React, { Fragment } from "react";
import Link from "next/link";
import Logo from "./Logo";

export default function MainNavibar() {
  return (
    <Fragment>
      <nav className='navbar navbar-expand-lg change '>
        <div className='container'>
          <Link href='/'>
            <a className='logo'>
              <Logo />
            </a>
          </Link>

          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='icon-bar'>
              <i className='fas fa-bars' />
            </span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <Link href='/about'>
                  <a className='nav-link' href='#'>
                    About
                  </a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link href='/works'>
                  <a
                    className='nav-link'
                    href='https://vie-alpha.vercel.app/about/about-dark/'
                  >
                    Works
                  </a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link href='/contact'>
                  <a
                    className='nav-link'
                    href='https://vie-alpha.vercel.app/about/about-dark/'
                  >
                    Contact
                  </a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link href='/login'>
                  <a
                    className='nav-link'
                    href='https://vie-alpha.vercel.app/about/about-dark/'
                  >
                    Login
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
