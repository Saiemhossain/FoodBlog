/* eslint-disable no-unused-vars */
import { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';


export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
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

    const contactData = {
      data: {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        message: formData.message,
      },
    };

    axios
      .post(`${import.meta.env.VITE_APP_URL}/api/contacts`, contactData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${import.meta.env.VITE_APP_API_TOKEN}`,
        },

      })
      .then(response => {
        if (response.status === 201) {
          toast.success("form submitted successfully")
          setFormData({
             firstName: '',
              lastName: '',
             email: '',
             message: '',
          })
        }
      
      })
      .catch(error => {
        toast.error('something went wrong')
       console.error(error)
      });
  };

  return (
    <section className="bg-gray-100">
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
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <h2 className="lg:text-[38px] leading-[49px] ">
              I would love to hear a few words about your project.
            </h2>

            <div className="mt-8">
              <p className="text-black">
                Get in touch with me if you have any queries and I’ll get back
                to you as soon as possible.
              </p>

              <a
                href="mailto:contact@info.com"
                className="not-italic text-xl font-semibold sm:text-[20px] lg:mt-2"
              >
                contact@info.com
              </a>
            </div>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form className="space-y-4" onSubmit={postContactData}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="First Name"
                    type="text"
                    id="firstName"
                    name="firstName"
                    onChange={handleChange}
                    value={formData.firstName}
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Last Name"
                    type="text"
                    id="lastName"
                    name="lastName"
                    onChange={handleChange}
                    value={formData.lastName}
                  />
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="email">
                  Email Address
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Email"
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Message"
                  rows="8"
                  id="message"
                  name="message"
                  onChange={handleChange}
                  value={formData.message}
                ></textarea>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-[#B08967] px-5 py-3 font-medium text-white sm:w-auto"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
