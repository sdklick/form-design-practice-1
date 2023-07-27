import React from "react";
import { useSelector, useDispatch } from "react-redux";
import purchasebook from "./reduxcontainer/Bookaction";

const Contact = () => {
  const nobook = useSelector((d) => d.numberofbook);

  const dispatch = useDispatch();

  return (
    <>
      <h1>{nobook}</h1>
      <button onClick={()=>dispatch(purchasebook())}>buybook</button>
    </>
  );
};

export default Contact;
