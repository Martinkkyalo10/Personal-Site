import React, { useState } from "react";

export default function Reviews() {
  // const [author, setAuthor] = useState("");
  // const [position, setPosition] = useState("");
  // const [image, setImage] = useState("");
  // const [index, setIndex] = useState("");

  return (
    <div>
      <section
        className='testimonials section-padding '
        style={{ backgroundImage: "none" }}
      >
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8 col-md-10'>
              <div className='sec-head  text-center'>
                <h6
                  className='wow fadeIn'
                  data-wow-delay='.5s'
                  style={{
                    visibility: "visible",
                    animationDelay: "0.5s",
                    animationName: "fadeIn",
                  }}
                >
                  Testimonials
                </h6>
                <h3
                  className='wow color-font animated'
                  style={{ visibility: "visible" }}
                >
                  We love our clients from all over the world.
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className='container-fluid position-re'>
          <div
            className='row wow fadeInUp'
            data-wow-delay='.5s'
            style={{
              visibility: "visible",
              animationDelay: "0.5s",
              animationName: "fadeInUp",
            }}
          >
            <div className='col-lg-12'>
              <div
                className='slick-slider slic-item slick-initialized'
                dir='ltr'
              >
                <button
                  type='button'
                  data-role='none'
                  className='slick-arrow slick-prev'
                  style={{ display: "block" }}
                >
                  {" "}
                  {/* */}Previous
                </button>
                <div className='slick-list' style={{ padding: "0px 50px" }}>
                  <div
                    className='slick-track'
                    style={{
                      width: 5424,
                      opacity: 1,
                      transform: "translate3d(-2712px, 0px, 0px)",
                    }}
                  >
                    {/* item1 */}
                    <div
                      data-index={-4}
                      tabIndex={-1}
                      className='slick-slide slick-cloned'
                      aria-hidden='true'
                      style={{ width: 452 }}
                    >
                      <div>
                        <div
                          className='item'
                          tabIndex={-1}
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <div className='info valign'>
                            <div className='cont'>
                              <div className='author'>
                                <div className='img'>
                                  <img src='/img/clients/1.jpg' alt />
                                </div>
                                <h6 className='author-name color-font'>
                                  Alex Regelman
                                </h6>
                                <span className='author-details'>
                                  Co-founder, Colabrio
                                </span>
                              </div>
                            </div>
                          </div>
                          <p>
                            I would highly recommend Vie Digital. I worked with
                            the team on an animation for our ‘Click &amp;
                            Collect’ service.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* item 2 */}
                    <div
                      data-index={-3}
                      tabIndex={-1}
                      className='slick-slide slick-cloned'
                      aria-hidden='true'
                      style={{ width: 452 }}
                    >
                      <div>
                        <div
                          className='item'
                          tabIndex={-1}
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <div className='info valign'>
                            <div className='cont'>
                              <div className='author'>
                                <div className='img'>
                                  <img src='/img/clients/1.jpg' alt />
                                </div>
                                <h6 className='author-name color-font'>
                                  Alex Regelman
                                </h6>
                                <span className='author-details'>
                                  Co-founder, Colabrio
                                </span>
                              </div>
                            </div>
                          </div>
                          <p>
                            I would highly recommend Vie Digital. I worked with
                            the team on an animation for our ‘Click &amp;
                            Collect’ service.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* item 3 */}
                  </div>
                </div>
                <button
                  type='button'
                  data-role='none'
                  className='slick-arrow slick-next'
                  style={{ display: "block" }}
                >
                  {" "}
                  {/* */}Next
                </button>
              </div>
            </div>
          </div>
          <div className='arrows'>
            <div className='container'>
              <div className='next cursor-pointer'>
                <span className='pe-7s-angle-right' />
              </div>
              <div className='prev cursor-pointer'>
                <span className='pe-7s-angle-left' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
