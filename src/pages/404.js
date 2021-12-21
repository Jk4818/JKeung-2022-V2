import React from "react";
import SquareButton from "../components/SquareButton";

const NotFoundPage = () => {
  return (
    <main className="w-screen h-screen bg-stone-900 flex flex-col justify-center items-center font-roboto font-bold">
      <title>Not found</title>
      <h1 className="text-gray-600 text-massive">404</h1>
      <h2 className="text-white text-4xl">Page Not Found</h2>
      <p className="text-stone-400 font-roboto-mono font-medium">
        You're accessing an unknown page :c
      </p>
      <SquareButton>Back to home</SquareButton>
    </main>
  );
};

export default NotFoundPage;
