import React from "react";
import SquareButton from "../components/SquareButton";

const NotFoundPage = () => {
  return (
    <main className="w-screen h-screen bg-dark-gray flex flex-col justify-center items-center gap-6 font-roboto font-bold">
      <title>Not found</title>

      <h1 className="text-blue-gray text-9xl sm:text-massive">404</h1>
      <h2 className="text-white text-4xl">Page Not Found</h2>
      <p className="text-p-gray font-roboto-mono font-medium">
        You're accessing an unknown page :c
      </p>
      <div className="mt-6">
        <SquareButton color="white">Back to home</SquareButton>
      </div>
    </main>
  );
};

export default NotFoundPage;
