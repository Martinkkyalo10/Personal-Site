import { Fragment, useState } from "react";
import BestWorks from "../components/homepage/BestWorks";
// import Form from "../components/homepage/form";
import Script from "next/script";
import Header from "../components/homepage/header";
import Message from "../components/homepage/Message";
import Services from "../components/homepage/Services";
import Skills from "../components/homepage/Skills";
import Testimonials from "../components/homepage/Testimonials";
import UXDesigns from "../components/homepage/UX-Designs";
import ContactForm from "../components/contact/contact-form";
import Reviews from "../components/reviews/Reviews";
// import Head from "../components/homepage/Head";

function HomePage() {
  return (
    <Fragment>
      {/* <Head /> */}
      <Header />
      <Services />
      <Skills />
      <BestWorks />
      <UXDesigns />
      <Reviews />
      <ContactForm />
      {/* footer */}

      <></>
    </Fragment>
  );
}

export default HomePage;
