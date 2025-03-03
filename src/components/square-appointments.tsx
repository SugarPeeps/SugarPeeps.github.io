"use client";

import React, { useEffect, useRef } from "react";
import Script from "next/script";

export default function SquareAppointments() {
  const containerRef = useRef(null);

  // We have to manually move the script tag back into the container before it loads
  // because Square's script appends the iFrame to the parent of the script
  // and Next.js moves the script to the bottom of the body
  useEffect(function() {
    const squareWidget = document.querySelector("#square-appointments-widget-script");
    containerRef.current.appendChild(squareWidget);
  }, [])

  return (
    <div ref={containerRef} id="square-appointments-widget">
      <Script
        id="square-appointments-widget-script"
        src="https://square.site/appointments/buyer/widget/55ac5595-a22b-46ef-bdea-3f552c1fd2c3/8X0P4KQ71MNP9.js"
        async
      />
    </div>
  );
}
