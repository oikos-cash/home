import React from "react";
import Footer from "components/Footer.js";
import ColorNavbar from "components/ColorNavbar.js";
import Header from "./Header.js";
import Notifications from "./Notifications.js";
import Content from "./Content.js";
import Highlights from "./Highlights.js";
import Tools from "./Tools.js";
import FAQ from "./FAQ.js";
import Synths from "./Synths.js";
import PreFooter from "./PreFooter.js";
import Subscribe from "./Subscribe.js";

import "assets/css/styles.css"

export default function Sections() {
  const wrapper = React.useRef(null);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    wrapper.current.scrollTop = 0;
    var href = window.location.href.substring(
      window.location.href.lastIndexOf("#") + 1
    );
    if (
      window.location.href.lastIndexOf("#") > 0 &&
      document.getElementById(href) !== null
    ) {
      document.getElementById(href).scrollIntoView();
    }
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  }, []);
  return (
    <>
      <ColorNavbar />
      <div className="wrapper" ref={wrapper}>
        <div className="section-space" />
        <Header />
        <Notifications />
        <Content />
        <Highlights />
        <Synths />
        <Tools />
        <PreFooter />
        <FAQ />
        {/* <Subscribe /> */}
        <Footer />
      </div>
    </>
  );
}
