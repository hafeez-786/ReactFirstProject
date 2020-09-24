import React, { useState } from 'react';
import { Collapse, a, } from 'react-bootstrap';

function Bank() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <>
      <div className="toggleDiv">
        <a
          onClick={() => setOpen(!open)}
          aria-controls="example1"
          aria-expanded={open}
        >
          Direct Bank Transfer
        </a>
        <Collapse in={open}>
          <div id="example1" className="p-top">
            Make your payment directly into our bank account. Please use your Order ID as the payment
            reference. Your order won’t be shipped until the funds have cleared in our account.
          </div>
        </Collapse>
      </div>
      <div className="toggleDiv">
        <a
          onClick={() => setOpen1(!open1)}
          aria-controls="example2"
          aria-expanded={open}
        >
          Cheque Payment
        </a>
        <Collapse in={open1}>
          <div id="example2" className="p-top">
            Make your payment directly into our bank account. Please use your Order ID as the payment
            reference. Your order won’t be shipped until the funds have cleared in our account.
          </div>
        </Collapse>
      </div>
      <div className="toggleDiv">
        <a
          onClick={() => setOpen2(!open2)}
          aria-controls="example3"
          aria-expanded={open}
        >
          PayPal
        </a>
        <Collapse in={open2}>
          <div id="example3" className="p-top">
            Make your payment directly into our bank account. Please use your Order ID as the payment
            reference. Your order won’t be shipped until the funds have cleared in our account.
          </div>
        </Collapse>
      </div>
    </>
  );
}

export default Bank

