import React from "react";
import BookNowButton from "./book-now-button";

export default function BookNowHeader(props: React.ComponentProps<"div">) {
  let { className, ...otherProps } = props;

  className = `${className} bg-black flex flex-col items-center`;

  return (
		<div className={className} {...otherProps}>
			<BookNowButton />
    </div>
  );
}
