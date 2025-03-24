import React from "react";

export default function BookNowHeader() {
  return (
    <div className="bg-black flex flex-row justify-around sticky top-0 z-50">
      <div className="py-2 px-6 bg-red">
        <a className="text-white" href="/appointments">
          Book Now
        </a>
      </div>
    </div>
  );
}
