import React from "react";
import { Button } from "@/components/structure";

export default function BookNowHeader() {
  return (
    <div className="bg-black flex flex-row justify-around sticky top-0 z-50">
      <Button href="/appointments">Book Now</Button>
    </div>
  );
}
