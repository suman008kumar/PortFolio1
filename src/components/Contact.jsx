import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";


function Contact() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/bqokqvgb", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <>
      <div
      name="Contact"
      className="max-w-screen-md container mx-auto px-4 md:px-10 my-8"
    >
      <h1 className="text-3xl font-bold text-center text-black-300 mb-4"> 
        Contact Me
      </h1>
      <p className="text-base text-center text-red-400 mb-6">
      Please fill out the form below to contact me.
      </p>
      <div className="flex flex-col items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-gradient-to-r from-purple-800 via-pink-600 to-purple-800 w-full md:w-2/3 px-6 py-6 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-white text-center mb-6">
            Send a Message
          </h2>
          <div className="flex flex-col mb-4">
            <label
              className="block text-pink-300 font-medium mb-1"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              {...register("name", { required: true })}
              className="shadow-sm rounded-md border-gray-600 border py-2 px-3 bg-gray-900 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-pink-400"
              id="name"
              name="name"
              type="text"
              placeholder="Your Full Name"
            />
            {errors.name && (
              <span className="text-red-500 text-sm mt-1">
                This field is required
              </span>
            )}
          </div>
          <div className="flex flex-col mb-4">
            <label
              className="block text-pink-300 font-medium mb-1"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              {...register("email", { required: true })}
              className="shadow-sm rounded-md border-gray-600 border py-2 px-3 bg-gray-900 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-pink-400"
              id="email"
              name="email"
              type="email"
              placeholder="example@mail.com"
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1">
                This field is required
              </span>
            )}
          </div>
          <div className="flex flex-col mb-4">
            <label
              className="block text-pink-300 font-medium mb-1"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              {...register("message", { required: true })}
              className="shadow-sm rounded-md border-gray-600 border py-2 px-3 bg-gray-900 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-pink-400"
              id="message"
              name="message"
              rows="3"
              placeholder="Type your message here..."
            ></textarea>
            {errors.message && (
              <span className="text-red-500 text-sm mt-1">
                This field is required
              </span>
            )}
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold w-full py-2 rounded-md shadow-md hover:from-pink-600 hover:to-purple-600 transition duration-300"
          >
            Send
          </button>
        </form>
        <p className="text-gray-500 mt-4 text-xs">
          Alternatively, email me directly at:{" "}
          <a
            href="mailto:example@mail.com"
            className="text-black-500 font-semibold underline"
          >
            sumankumar7542845565@gmail.com
          </a>
        </p>
      </div>
    </div>
    </>
  );
}

export default Contact;
