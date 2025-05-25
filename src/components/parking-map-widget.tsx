import React from "react";

export default function ParkingMapWidget(props: { className?: string }) {
  // https://www.google.com/maps/d/edit?mid=1L0SVlHZuKqxh5FRArUaKpgInwHMCDVE&usp=sharing
  return (
    <div className={`overflow-hidden w-full ${props.className}`} style={{ height: "480px" }}>
      <iframe className="w-full" style={{ marginTop: "-60px", height: "480px" }} src="https://www.google.com/maps/d/embed?mid=1L0SVlHZuKqxh5FRArUaKpgInwHMCDVE&ehbc=2E312F&noprof=1"></iframe>
    </div >
  );
}
