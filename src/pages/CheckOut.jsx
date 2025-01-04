/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { cartState } from "../context/Context"
import axios from 'axios';
import { useNavigate } from "react-router";
import toast, { Toaster } from 'react-hot-toast';

export default function CheckOut() {
  const { cart } = cartState();
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  let totalCost = () => {
    let Vat = 20;
    let price = cart.length === 0 ? 0 : cart[0].price;
    let totalPrice = price + Vat;

    setTotal(() => String(totalPrice))

  }
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      notes: '',
      paymentMethod: '',
      serviceName: '',
      packageType: '',
      price: '',
    });

    const handleChange = e => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    };

    const postContactData = e => {
      e.preventDefault();
      console.log(formData);

      const orderData = {
        data: {
          customer_name: formData.name,
          customer_email: formData.email,
          order_notes: formData.notes,
          payment_method: formData.paymentMethod,
          service_name: cart[0].service_name,
          package_type: cart[0].package_type,
          price:total
        },
      };
console.log(orderData);
      axios
        .post(`${import.meta.env.VITE_APP_URL}/api/orders`, orderData, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `bearer ${import.meta.env.VITE_APP_API_TOKEN}`,
          },
        })
        .then(response => {
          if (response.status === 201) {
            toast.success('form submitted successfully');
            setFormData({
              name: '',
              email: '',
              notes: '',
              paymentMethod: '',
            });
          }
        })
        .catch(error => {
          toast.error('something went wrong');
          console.error(error);
        });
      navigate('/thank-you');
  };
  
  useEffect(() => {
    totalCost();
  }, []);

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            // Define default options
            className: '',
            duration: 5000,
            removeDelay: 1000,
            style: {
              background: '#363636',
              color: '#fff',
            },

            // Default options for specific types
            success: {
              duration: 3000,
              iconTheme: {
                primary: 'green',
                secondary: 'black',
              },
            },
          }}
        />
        <div className="mx-auto max-w-3xl">
          <header className="text-center">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Checkout
            </h1>
          </header>

          <div className="mt-8">
            <ul className="space-y-4">
              {cart.length !== 0 ? (
                <li
                  key={cart[0].service_name}
                  className="flex items-center gap-4"
                >
                  <img
                    src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                    alt=""
                    className="size-16 rounded object-cover"
                  />

                  <div>
                    <h3 className="text-sm text-gray-900">
                      {' '}
                      {cart[0].service_name}{' '}
                    </h3>

                    <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                      <div>
                        <dt className="inline">{cart[0].package_type} </dt>
                      </div>
                    </dl>
                  </div>

                  <div className="flex flex-1 items-center justify-end gap-2">
                    <form>
                      <label htmlFor="Line1Qty" className="sr-only">
                        {' '}
                        Quantity{' '}
                      </label>

                      <input
                        type="number"
                        min="1"
                        value="1"
                        id="Line1Qty"
                        className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                      />
                    </form>

                    <button className="text-gray-600 transition hover:text-red-600">
                      <span className="sr-only">Remove item</span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                </li>
              ) : (
                <div>
                  {' '}
                  <h2 className="text-center font-semibold text-2xl">
                    {' '}
                    Ops... No cart found...🛒
                  </h2>{' '}
                </div>
              )}
            </ul>

            {cart.length !== 0 ? (
              <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                <div className="w-screen max-w-lg space-y-4">
                  <dl className="space-y-0.5 text-sm text-gray-700">
                    <div className="flex justify-between">
                      <dt>Subtotal</dt>
                      <dd>{cart[0].price} </dd>
                    </div>

                    <div className="flex justify-between">
                      <dt>VAT</dt>
                      <dd> $20 </dd>
                    </div>

                    <div className="flex justify-between !text-base font-medium">
                      <dt>Total</dt>
                      <dd> ${total} </dd>
                    </div>
                  </dl>

                  <div className="flex justify-end">
                    <span className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="-ms-1 me-1.5 size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                        />
                      </svg>

                      <p className="whitespace-nowrap text-xs">offer ongoing</p>
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
        {/* checkout form */}

        <form className="mx-auto max-w-[400px]" onSubmit={postContactData}>
          <h2 className="text-center font-bold  text-2xl m-4">
            Continue To Payment
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="name">
                Your Name
              </label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Customer Name"
                type="name"
                id="name"
                name="name"
                onChange={handleChange}
                value={formData.name}
              />
            </div>
          </div>

          <div>
            <label className="sr-only" htmlFor="email">
              Email Address
            </label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Customer Email"
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
            />
          </div>

          <div>
            <label className="sr-only" htmlFor="message">
              Order note if any
            </label>
            <textarea
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Order notes"
              rows="3"
              id="notes"
              name="notes"
              onChange={handleChange}
              value={formData.notes}
            ></textarea>
          </div>

          <label
            for="Option1"
            className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
          >
            <div className="flex items-center">
              &#8203;
              <input
                type="checkbox"
                value={'make payment later'}
                className="size-4 rounded border-gray-300"
                id="Option1"
                onChange={handleChange}
                name="paymentMethod"
              />
            </div>

            <div>
              <strong className="font-medium text-gray-900">
                Make Payment later
              </strong>

              <p className="mt-1 text-pretty text-sm text-gray-700">
                we will send payment link later through on email
              </p>
            </div>
          </label>
          <label
            for="Option2"
            className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
          >
            <div className="flex items-center">
              &#8203;
              <input
                type="checkbox"
                className="size-4 rounded border-gray-300"
                id="Option2"
                onChange={handleChange}
                name="paymentMethod"
                value={'we will send you a link on email'}
              />
            </div>

            <div>
              <strong className="font-medium text-gray-900">
                Credit /Debit card
              </strong>

              <p className="mt-1 text-pretty text-sm text-gray-700">
                make payment online
              </p>
            </div>
          </label>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-[#0984e3] px-5 py-3 font-medium text-white sm:w-auto"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}





