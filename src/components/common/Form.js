import React, { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

// error messages
const schema = yup.object({
  name: yup.string().required("Please fill in this field"),
  email: yup
    .string()
    .email("Please provide a valid email")
    .required("Please fill in this field"),
  company: yup.string().required("Please fill in this field"),
  message: yup.string().required("Please fill in this field"),
});

function Form() {
  // form properties
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  // properties fetch from  react hook form
  const { register, formState, handleSubmit, reset } = form;
  const { errors, isSubmitSuccessful } = formState;

  // function to handle form submission
  const submitHandler = async (data) => {
    const options = { publicKey: process.env.REACT_APP_EMAIL_PUBLIC_KEY };
    await emailjs
      .send(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        data,
        options
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          // handle toastify
          toast.success("Form is submitted", {
            position: "bottom-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div className="w-full flex flex-row justify-center font-['Helvetica']">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="w-10/12 flex flex-col gap-y-4 items-center"
      >
        <div className=" text-black text-sm italic py-2  text-center w-9/12">
        Thank you for your interest in reaching out. Whether you have a question, a collaboration idea, or simply wish to say hello, I am here to listen. Please choose the method that suits you best.
        </div>
        {/* name as input*/}
        <label htmlFor="name" className="w-10/12">
          <input
            name="name"
            className=" w-full py-3 bg-white rounded-md border border-red-200 placeholder:text-orange-950 placeholder:text-opacity-60 placeholder:text-base placeholder:font-normal placeholder:leading-loose px-3 focus:border-[#5928E5] focus:outline-none focus:ring-[#5928E5] focus:ring-1"
            type="text"
            placeholder="Enter Name"
            {...register("name")}
          />
          <br />
          <p className=" text-sm  text-red-700  leading-loose px-3">
            {errors.name ? "*" : ""}
            {errors.name?.message}
          </p>
        </label>

        {/*email as input  */}
        <label htmlFor="email" className="w-10/12">
          <input
            name="email"
            className=" w-full py-3 bg-white rounded-md border border-red-200 placeholder:text-orange-950 placeholder:text-opacity-60 placeholder:text-base placeholder:font-normal placeholder:leading-loose px-3 focus:border-[#5928E5] focus:outline-none focus:ring-[#5928E5] focus:ring-1"
            type="text"
            placeholder="Enter Email"
            {...register("email")}
          />
          <br />
          <p className=" text-sm  text-red-700  leading-loose px-3">
            {errors.email ? "*" : ""}
            {errors.email?.message}
          </p>
        </label>

        {/* company name as input */}
        <label htmlFor="company" className="w-10/12">
          <input
            name="company"
            className=" w-full py-3 bg-white rounded-md border border-red-200 placeholder:text-orange-950 placeholder:text-opacity-60 placeholder:text-base placeholder:font-normal placeholder:leading-loose px-3 focus:border-[#5928E5] focus:outline-none focus:ring-[#5928E5] focus:ring-1"
            type="text"
            placeholder="Your Company (None if Not Applicable)"
            {...register("company")}
          />
          <br />
          <p className=" text-sm  text-red-700  leading-loose px-3">
            {errors.company ? "*" : ""}
            {errors.company?.message}
          </p>
        </label>

        {/* message as input */}
        <label htmlFor="message" className="w-10/12">
          <textarea
            name="message"
            className=" w-full py-3 bg-white rounded-md border border-red-200 placeholder:text-orange-950 placeholder:text-opacity-60 placeholder:text-base placeholder:font-normal placeholder:leading-loose px-3 focus:border-[#5928E5] focus:outline-none focus:ring-[#5928E5] focus:ring-1"
            type="text"
            placeholder="How Can I Help?"
            {...register("message")}
          ></textarea>
          <br />
          <p className=" text-sm  text-red-700  leading-loose px-3">
            {errors.message ? "*" : ""}
            {errors.message?.message}
          </p>
        </label>

        <button className='bg-[#e64072] rounded-sm text-center text-[#FFD9D9] text-sm font-black uppercase px-10 py-4 transition duration-300 ease-in-out hover:bg-black hover:scale-x-110'>
          Get in Touch
        </button>
      </form>
    </div>
  );
}

export default Form;
