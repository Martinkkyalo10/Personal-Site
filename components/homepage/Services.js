import React, { Fragment } from "react";

export default function Services() {
  return (
    <Fragment>
      <section className='services box lficon section-padding position-re'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8 col-md-10'>
              <div className='sec-head text-center'>
                <h6 className='wow fadeIn' data-wow-delay='.5s'>
                  Best Features
                </h6>
                <h3 className='wow color-font'>
                  We are a new digital product development agency
                </h3>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-6 wow fadeInLeft' data-wow-delay='.5s'>
              <div className='item-box no-curve'>
                <div>
                  <span className='icon color-font pe-7s-paint-bucket' />
                </div>
                <div className='cont'>
                  <h6>Graphic Design</h6>
                  <p>
                    Tempore corrupti temporibus fuga earum asperiores fugit
                    laudantium.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-6 wow fadeInLeft' data-wow-delay='.7s'>
              <div className='item-box no-curve'>
                <div>
                  <span className='icon color-font pe-7s-phone' />
                </div>
                <div className='cont'>
                  <h6>Web &amp; Mobile Design</h6>
                  <p>
                    Tempore corrupti temporibus fuga earum asperiores fugit.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-6 wow fadeInLeft' data-wow-delay='.9s'>
              <div className='item-box no-curve'>
                <div>
                  <span className='icon color-font pe-7s-display1' />
                </div>
                <div className='cont'>
                  <h6>Social Media Marketing</h6>
                  <p>
                    Tempore corrupti temporibus fuga earum asperiores fugit.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-6 wow fadeInLeft' data-wow-delay='.5s'>
              <div className='item-box no-curve'>
                <div>
                  <span className='icon color-font pe-7s-diskette' />
                </div>
                <div className='cont'>
                  <h6>Document Legal Policy</h6>
                  <p>
                    Tempore corrupti temporibus fuga earum asperiores fugit
                    laudantium.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='line bottom right' />
      </section>
    </Fragment>
  );
}
