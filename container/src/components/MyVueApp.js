import React, { useRef, useEffect } from "react";
import { mount } from "RemoteVueApp/VueApp";

const MyVueApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref}></div>;
};

export default MyVueApp;