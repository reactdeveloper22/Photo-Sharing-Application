import React from "react";
import { MagnifyingGlass, ColorRing } from "react-loader-spinner";

const Spinner = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      {message === "Loading more pins" ? (
        <ColorRing
          visible={true}
          height="80"
          width="200"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      ) : (
        <MagnifyingGlass
          visible={true}
          height="80"
          width="200"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor="#c0efff"
          color="#e15b64"
        />
      )}

      <p className="text-lg text-center px-2 mt-5">{message}</p>
    </div>
  );
};

export default Spinner;
