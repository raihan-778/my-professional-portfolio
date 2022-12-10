import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_nw571i7",
        "template_2eyhicm",
        form.current,
        "PY6k_RRFYbPdnBwXw"
      )
      .then(
        (result) => {
          console.log(form.current);
          console.log(result.text);
          if (result) {
            toast.success("Message Sent");
          }
          form.reset();
        },
        (error) => {
          console.log(error.text);
          console.log("message-sent");
        }
      );
  };

  return (
    <div>
      <fieldset className="grid grid-cols-1 w-1/2 mb-5 mx-auto gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
        <form ref={form} onSubmit={sendEmail}>
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="text-2xl text-sky-400 font-semibold">
              Please Leave your message here.
            </p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-6">
            <div className="col-span-full">
              <label for="bio" className="text-sm">
                Name
              </label>
              <input
                id="name"
                placeholder="Enter your Name"
                className="w-full py-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                name="user_name"
              />
            </div>
            <div className="col-span-full">
              <label for="bio" className="text-sm">
                Email
              </label>
              <input
                id="email"
                placeholder="Enter your email address"
                className="w-full py-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                name="user_email"
              />
            </div>
            <div className="col-span-full">
              <label for="bio" className="text-sm">
                Message
              </label>
              <textarea
                id="message"
                placeholder=""
                className="w-full py-5 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                spellcheck="false"
                name="message"
              ></textarea>
            </div>
            <div className="col-span-full">
              <input
                type="submit"
                Value="Submit"
                className="px-4 py-2 border rounded-md dark:border-gray-100"
              />
            </div>
          </div>
        </form>
      </fieldset>
    </div>
  );
};

export default ContactMe;
