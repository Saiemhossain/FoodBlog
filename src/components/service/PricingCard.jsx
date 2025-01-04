/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useContext, useEffect, useState } from "react";
import { CartContext, cartState } from "../../context/Context";
import { useNavigate } from "react-router";




export default function PricingCard({ service }) {
  

 const {cart,setCart} = cartState()
  // console.log(cart);

  const navigate = useNavigate()

  const addToCart = () => {
    setCart([service])
    navigate('/checkout');
  }

  useEffect(() => {
    // console.log(cart);
  },[cart])

  const features = service.features.split("\n")
  // console.log(features);
 
  return (
    <>
      
      <div className="service-part wrapper shadow p-6">
        <div className="p-6 sm:px-8 ">
          <h2 className="text-lg font-medium text-gray-900">
            {service.service_name}
            <span className="sr-only">plan</span>
          </h2>

          <p className="mt-2 sm:mt-4">
            <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
              {' '}
              ${service.price}{' '}
            </strong>

            <span className="text-sm font-medium text-gray-700">
              {' '}
              {service.package_type}{' '}
            </span>
          </p>

          <a
            className="mt-4 block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
          onClick={addToCart}
          
          >
            Get Started
          </a>
        </div>

        <div className="p-6 sm:px-8">
          <p className="text-lg font-medium text-gray-900 sm:text-xl">
            What's included:
          </p>

          <ul className="mt-2 space-y-2 sm:mt-4">
            {features &&  features.map(feature => (
              <li key={feature.id}>
                {' '}
                {
                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-indigo-700"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-gray-700"> {feature} </span>
                  </li>
                }{' '}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
