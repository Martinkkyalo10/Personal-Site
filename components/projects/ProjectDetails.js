import React, { Fragment, useState } from "react";

export default function ProjectDetails() {
  const [title, setTitle] = useState("");
  const [client, setClient] = useState("");
  const [date, setDate] = useState("");
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [introduction, setIntroduction] = useState("");
  const [features, setFeatures] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [description, setDescription] = useState("");
  const [video, setVideo] = useState("");

  const [backgroundImage, setBackgroundImage] = useState("");
  return (
    <div className='wrapper'>
      <section
        className='page-header proj-det bg-img parallaxie valign'
        style={{ backgroundImage: "url(/img/portfolio/project2/bg.jpg)" }}
        data-overlay-dark={4}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-7 col-md-9'>
              <div className='cont'>
                <h6>art &amp; illustration</h6>
                <h2>Inspiring new space.</h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-3'>
              <div className='item mt-30'>
                <h6>Client</h6>
                <p>
                  <a href='/project-details2/project-details2-dark/#'>
                    Envato.com
                  </a>
                </p>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='item mt-30'>
                <h6>Date</h6>
                <p>6 August 2022</p>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='item mt-30'>
                <h6>Categories</h6>
                <p>
                  <a href='/project-details2/project-details2-dark/#'>
                    Web Design{/* */}
                  </a>
                  <a href='/project-details2/project-details2-dark/#'>
                    WordPress
                  </a>
                </p>
              </div>
            </div>
            <div className='col-lg-3'>
              <div className='item mt-30'>
                <h6>Tags</h6>
                <p>
                  <a href='/project-details2/project-details2-dark/#'>
                    Minimal{/* */} ,
                  </a>
                  <a href='/project-details2/project-details2-dark/#'>
                    Modern{/* */} ,
                  </a>
                  <a href='/project-details2/project-details2-dark/#'>Design</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='intro-section section-padding'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-md-4'>
              <div className='htit'>
                <h4>
                  <span>01 </span> Introduction
                </h4>
              </div>
            </div>
            <div className='col-lg-8 offset-lg-1 col-md-8'>
              <div className='text js-scroll__content'>
                <p className='extra-text'>
                  We are a Creative Agency &amp; Startup Studio that provides
                  Digital Products and Services turns to focus on client
                  success. We specialize in user interface design, including
                  front-end development which we consider to be an integral
                  part.
                </p>
                <ul className='smp-list mt-30'>
                  <li>Aenean sollicitudin</li>
                  <li>lorem quis bibendum auctor</li>
                  <li>nisi elit conseq uat ipsum</li>
                  <li>nec sagittis sem nibh id elit</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='projdtal'>
        <div className='popup-img'>
          <div className='row'>
            <a href='#' className='col-md-3 popimg'>
              <img alt src='/img/portfolio/project2/1.jpg' />
            </a>
            <a href='#' className='col-md-3 popimg'>
              <img alt src='/img/portfolio/project2/2.jpg' />
            </a>
            <a href='#' className='col-md-3 popimg'>
              <img alt src='/img/portfolio/project2/3.jpg' />
            </a>
            <a href='#' className='col-md-3 popimg'>
              <img alt src='/img/portfolio/project2/5.jpg' />
            </a>
            <a href='#' className='col-md-12 popimg'>
              <img alt src='/img/portfolio/project2/7.jpg' />
            </a>
          </div>
        </div>
      </section>
      <section className='intro-section section-padding'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-md-4'>
              <div className='htit'>
                <h4>
                  <span>02 </span> Description
                </h4>
              </div>
            </div>
            <div className='col-lg-8 offset-lg-1 col-md-8'>
              <div className='text js-scroll__content'>
                <p className='extra-text'>
                  We are a Creative Agency &amp; Startup Studio that provides
                  Digital Products and Services turns to focus on client
                  success. We specialize in user interface design, including
                  front-end development which we consider to be an integral
                  part.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container-fluid'>
          <div
            className='video-wrapper section-padding bg-img parallaxie valign'
            style={{ backgroundImage: "url(/img/portfolio/project2/bg.jpg)" }}
            data-overlay-dark={4}
          >
            <div className='full-width text-center'>
              <a className='vid'>
                <div className='vid-butn'>
                  <span className='icon'>
                    <i className='fas fa-play' />
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className='next-prog section-padding'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='box'>
                <div
                  className='bg-img valign'
                  style={{
                    backgroundImage: "url(/img/portfolio/project2/6.jpg)",
                  }}
                  data-overlay-dark={4}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
