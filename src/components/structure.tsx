import React from "react";
import {
  ContactAddress,
  ContactAddress2,
  ContactCity,
  ContactEmail,
  ContactPhone,
} from "../constants";

type LinkProps = {
  children: React.ReactNode;
  url: string;
  newWindow?: boolean;
  noColor?: boolean;
};

export function Link({
  children,
  url,
  newWindow = false,
  noColor = false,
}: LinkProps) {
  const className = noColor ? "hover:text-red" : "text-red hover:text-black";
  return (
    <a className={className} href={url} target={newWindow ? "_blank" : null}>
      {children}
    </a>
  );
}

export function Address() {
  const baseUrl = "https://google.com/maps/?q=";
  const addressQuery = `${ContactAddress}, ${ContactCity}`;

  return (
    <address className="not-italic">
      <a
        href={baseUrl + addressQuery}
        target="_blank"
        className="hover:text-red"
      >
        <div className="font-bold">{ContactAddress}</div>
        <div>{ContactAddress2}</div>
        <div>{ContactCity}</div>
      </a>
    </address>
  );
}

export function Email({
  children,
  ...props
}: {
  children?: React.ReactNode;
  [_key: string]: any;
}) {
  return (
    <Link url={`mailto:${ContactEmail}`} {...props}>
      {children ? children : ContactEmail}
    </Link>
  );
}

export function Phone() {
  return (
    <a href={`tel:${ContactPhone}`} className="hover:text-red">
      {ContactPhone}
    </a>
  );
}
