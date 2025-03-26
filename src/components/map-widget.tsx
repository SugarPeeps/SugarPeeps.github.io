import { ContactAddress, ContactAddress2, ContactCity } from "@/constants";
import React from "react";

export default function MapWidget() {
  const searchParam = encodeURIComponent(
    `${ContactAddress}\n${ContactAddress2}\n${ContactCity}`,
  );
  const zoomLevel = 14;

  return (
    <iframe
      className="w-full h-96"
      src={`https://www.google.com/maps?q=${searchParam}&output=embed&hl=en&z=${zoomLevel}`}
    />
  );
}
