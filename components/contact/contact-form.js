import { useState, useEffect, Fragment } from "react";

import classes from "./contact-form.module.css";
import Notification from "../ui/notification";

async function sendContactData(contactDetails) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactDetails),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
}

export default function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [requestStatus, setRequestStatus] = useState(); // 'pending', 'success', 'error'
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  async function sendMessageHandler(event) {
    event.preventDefault();

    // optional: add client-side validation

    setRequestStatus("pending");

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
      setRequestStatus("success");
      setEnteredMessage("");
      setEnteredEmail("");
      setEnteredName("");
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus("error");
    }
  }

  let notification;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on its way!",
    };
  }

  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Message sent successfully!",
    };
  }

  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: requestError,
    };
  }
  return (
    <Fragment>
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
                <form id='contact-form' onSubmit={sendMessageHandler}>
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
                            value={enteredName}
                            onChange={(event) =>
                              setEnteredName(event.target.value)
                            }
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
                            value={enteredEmail}
                            onChange={(event) =>
                              setEnteredEmail(event.target.value)
                            }
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
                            value={enteredMessage}
                            onChange={(event) =>
                              setEnteredMessage(event.target.value)
                            }
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
