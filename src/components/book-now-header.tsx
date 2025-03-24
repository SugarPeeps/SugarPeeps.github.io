import React from "react";

export default function BookNowHeader() {
  return (
    <div className="bg-black flex flex-row justify-around sticky top-0 z-50">
      <div className="m-2 md:m-0 p-2 bg-red text-xl md:text-base">
        <a className="text-white" href="/appointments">
          Book Now
        </a>
      </div>
    </div>
  );
}
