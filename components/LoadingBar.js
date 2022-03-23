import React, { Fragment } from "react";

export default function LoadingBar() {
  return (
    <Fragment>
      <div className='mouse-cursor cursor-outer' />
      <div className='mouse-cursor cursor-inner' />
      <div className='showX'>
        <div className='loading'>
          <span>L</span>
          <span>o</span>
          <span>a</span>
          <span>d</span>
          <span>i</span>
          <span>n</span>
          <span>g</span>
        </div>
        <div id='preloader' />
      </div>
    </Fragment>
  );
}
