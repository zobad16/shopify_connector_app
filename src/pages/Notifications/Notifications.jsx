import React from "react";
import {
  Typography,
  Alert,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";

const Notifications = () => {
  return (
    <>
      <div className="p-24flex flex-col justify-center items-center space-y-5 mr-6">
        <h3 className="pb-10 font-bold text-4xl text-green-900 text-center">
          Headings, Paragraphs, and Dividers
        </h3>

        <div className="w-full p-5 rounded-lg border border-green-400 bg-green-300 text-green-900 divide-y-2 divide-solid divide-green-400">
          <h2 className="font-bold text-xl pb-2">Congratulations!</h2>
          <p className="pt-2">
            You have successfully recreated Bootstrap's alert box in{" "}
            <a href="https://tailwindcss.com/" className="font-bold underline">
              Tailwind CSS
            </a>
            .
          </p>
        </div>

        <div className="w-full p-5 rounded-lg border border-yellow-400 bg-yellow-300 text-yellow-900 divide-y-2 divide-solid divide-yellow-400">
          <h2 className="font-bold text-xl pb-2">Warning!</h2>
          <p className="pt-2">
            May cause excessive fun when using Tailwind CSS.
          </p>
        </div>
      </div>

      <div className="p-24 flex flex-col justify-center items-center space-y-5">
        <div className="w-full p-5 rounded-lg border border-blue-400 bg-blue-300 text-blue-900 flex">
          <span className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
          Primary Alert
        </div>
        <div className="w-full p-5 rounded-lg border border-gray-500 bg-gray-400 text-gray-900 flex">
          <span className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
          Secondary Alert
        </div>
        <div className="w-full p-5 rounded-lg border border-green-400 bg-green-300 text-green-900 flex">
          <span className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
              />
            </svg>
          </span>
          Success Alert
        </div>
        <div className="w-full p-5 rounded-lg border border-red-400 bg-red-300 text-red-900 flex">
          <span className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
          Danger Alert
        </div>
        <div className="w-full p-5 rounded-lg border border-yellow-400 bg-yellow-300 text-yellow-900 flex">
          <span className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </span>
          Warning Alert
        </div>
      </div>
    </>
  );
};

export default Notifications;
