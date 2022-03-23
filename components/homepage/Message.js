import React, { Fragment } from "react";
import Form from "./form";

export default function Message() {
  return (
    <Fragment>
      <Form />
      <section className='contact-sec section-padding position-re'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8 col-md-10'>
              <div className='sec-head text-center'>
                <h6 className='wow fadeIn' data-wow-delay='.5s'>
                  Contact Us
                </h6>
                <h3 className='wow color-font'>
                  Let’s Get in Touch And Make Magic Together.
                </h3>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-10'>
              <div className='form wow fadeInUp' data-wow-delay='.5s'>
                <form
                  id='contact-form'
                  method='post'
                  action='https://vie-alpha.vercel.app/homepage/home7-dark/contact.php'
                >
                  <div className='messages' />
                  <div className='controls'>
                    <div className='row'>
                      <div className='col-lg-4'>
                        <div className='form-group'>
                          <input
                            type='text'
                            id='form_name'
                            name='name'
                            placeholder='Name'
                            required
                          />
                        </div>
                      </div>
                      <div className='col-lg-4'>
                        <div className='form-group'>
                          <input
                            type='email'
                            id='form_email'
                            name='email'
                            placeholder='Email'
                            required
                          />
                        </div>
                      </div>
                      <div className='col-lg-4'>
                        <div className='form-group'>
                          <input
                            type='text'
                            id='form_name'
                            name='name'
                            placeholder='Name'
                            required
                          />
                        </div>
                      </div>
                      <div className='col-12'>
                        <div className='form-group'>
                          <textarea
                            id='form_message'
                            name='message'
                            placeholder='Message'
                            rows={4}
                            required
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className='col-12'>
                        <div className='text-center'>
                          <a href='#0' className='butn bord curve mt-30'>
                            <span>Send Massege</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
