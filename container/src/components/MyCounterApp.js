import React, { useRef, useEffect } from "react";
import { mount } from "RemoteCounterApp/CounterApp";

const MyCounterApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref}></div>;
};

export default MyCounterApp;