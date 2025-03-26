import React from "react";

export default function BookNowHeader(props: React.ComponentProps<"div">) {
  let { className, ...otherProps } = props;

  className = `${className} bg-black flex flex-col items-center`;

  return (
    <div className={className} {...otherProps}>
      <div className="py-2 px-6 bg-red">
        <a className="text-white" href="/appointments#scheduling">
          Book Now
        </a>
      </div>
    </div>
  );
}
