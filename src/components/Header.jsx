/* eslint-disable react/no-unknown-property */

import {  useEffect } from 'react';
import Logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom';
import { handleNavToggle } from './HeaderLogic';
import { cartState } from '../context/Context';


export default function Header() {
  const {cart} = cartState()
  
  useEffect(() => {
    handleNavToggle()
  },[])

  return (
    <>
      <div className="header-area">
        <div className="header wrapper">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <nav>
            <ul>
              <li>
                {' '}
                <NavLink to="/">Home</NavLink>{' '}
              </li>
              <li>
                {' '}
                <NavLink to="/about">About</NavLink>{' '}
              </li>
              <li>
                {' '}
                <NavLink to="/food">Food</NavLink>{' '}
              </li>
              <li>
                {' '}
                <NavLink to="/service">Service</NavLink>{' '}
              </li>
              <li>
                {' '}
                <NavLink to="/contact">Contact</NavLink>{' '}
              </li>
              <li>
                <div className="cart-icon">
                  <span> {cart.length} </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                </div>
              </li>
            </ul>
          </nav>

          <div className="hamburger" id="hamburger">
            <div className="cart-icon hamburger">
              <span> {cart.length} </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="menu-icon open"
            >
              <path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="menu-icon close"
            >
              <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path>
            </svg>
          </div>

          <div className="mobile-menu">
            <div className="mobile-logo">
              <img src={Logo} alt="mobile-logo" />
            </div>
            <nav>
              <ul>
                <li>
                  {' '}
                  <NavLink to="/">Home</NavLink>{' '}
                </li>
                <li>
                  {' '}
                  <NavLink to="/about">About</NavLink>{' '}
                </li>
                <li>
                  {' '}
                  <NavLink to="/food">Food</NavLink>{' '}
                </li>
                <li>
                  {' '}
                  <NavLink to="/service">Service</NavLink>{' '}
                </li>
                <li>
                  {' '}
                  <NavLink to="/contact">Contact</NavLink>{' '}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
