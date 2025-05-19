/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'flowbite-react'

declare global {
  interface Window {
    Razorpay: any;
  }
}

const CheckoutButton: React.FC = () => {
  const [openModal, setOpenModal] = useState(false)
  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  const amount = 1000000;
  const currency = "INR";
  const receipt = "Receipt no. 1";
  const handlePayment = async () => {
    try {
      const response = await fetch("http://localhost:5000/order", {
        method: "POST",
        body: JSON.stringify({
          amount,
          currency,
          receipt,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new Error("Failed to create order");

      const order = await response.json();
      console.log(order);

      const options = {
        key: "rzp_test_ghTeekIY3ZvfG3", // Enter the Key ID generated from the Dashboard
        amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency,
        name: "Acme Corp", // your business name
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: order.id, // Order ID from step 1 response
        handler: async function (response: any) {
          try {
            const body = {
              ...response,
            };

            const validateRes = await fetch("http://localhost:5000/order/validate", {
              method: "POST",
              body: JSON.stringify(body),
              headers: {
                "Content-Type": "application/json",
              },
            });

            if (!validateRes.ok) throw new Error("Validation failed");

            const jsonRes = await validateRes.json();
            console.log(jsonRes);
          } catch (err) {
            console.error("Validation error:", err);
            alert("Payment validation failed.");
          }
        },
        prefill: {
          name: "Web Dev Matrix", // your customer's name
          email: "webdevmatrix@example.com",
          contact: "9000000000", // customer's phone number
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp1 = new window.Razorpay(options);

      rzp1.on("payment.failed", function (response: { error: { code: any; description: any; source: any; step: any; reason: any; metadata: { order_id: any; payment_id: any } } }) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
      });

      rzp1.open();
    } catch (error) {
      console.error("Order creation or Razorpay setup error:", error);
      alert("Something went wrong while initiating the payment. Please try again.");
    }

  }

  return (
    <>
      <>
        {/* <button
          onClick={() => setOpenModal(true)}
          className="mt-8 px-6 py-3 bg-white border-[#626262] rounded-lg text-2xl text-[#626262]"
        >
          Checkout
        </button> */}

        <div className='mt-24'>
          {/* <button
            className="border-[#626262] text-[#626262]  h-12 px-6 border rounded-lg text-2xl font-semibold bg-white hover:border-[#626262] focus:outline-none focus:ring-2focus:ring-[#626262] transition"
          >
            Checkout
          </button> */}

          <button
            className="w-[134px] h-[49px] opacity-20 border border-[#626262] rounded-[4px] px-[10px] py-[10px] flex items-center justify-center cursor-pointer"
          >
            <span className="w-[114px] h-[29px] font-inter font-bold text-[24px] leading-[100%] tracking-[0%] text-[#626262]">
              Checkout
            </span>
          </button>


        </div>



        <Modal show={openModal} size="3xl" onClose={() => setOpenModal(false)}>
          <ModalHeader className="bg-black">
            Complete Your Purchase
          </ModalHeader>

          {/* force white background */}
          <ModalBody className="bg-white">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Left: User Info Form */}
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-4">Your Details</h2>

                <form onSubmit={e => { e.preventDefault(); handlePayment() }}>
                  <div className="form-group mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div className="form-group mb-4">
                    <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                      Mobile Number
                    </label>
                    <input
                      id="mobile"
                      type="tel"
                      value={mobile}
                      onChange={e => setMobile(e.target.value)}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </form>
              </div>

              {/* Right: Payment Summary */}
              <div className="w-full lg:w-80 border-l border-gray-200 pl-6">
                <h2 className="text-lg font-semibold mb-4">Payment Summary</h2>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>1 seat × Pro (at $59.00 / month)</span>
                    <span>$59.00</span>
                  </div>
                  <hr />
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>$59.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>$0.00</span>
                  </div>
                  <hr />
                  <div className="flex justify-between font-semibold">
                    <span>Total at renewal</span>
                    <span>$59.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Adjustment due today</span>
                    <span className="font-semibold">$0.00</span>
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>

          <ModalFooter className="bg-white flex justify-end">
            <Button color="gray" onClick={() => setOpenModal(false)}>
              Cancel
            </Button>
            <Button onClick={handlePayment}>
              Pay $59
            </Button>
          </ModalFooter>
        </Modal>
      </>
    </>
  )
}

export default CheckoutButton