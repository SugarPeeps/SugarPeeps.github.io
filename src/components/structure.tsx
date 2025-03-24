import React from "react";
import {
  ContactAddress,
  ContactAddress2,
  ContactCity,
  ContactEmail,
  ContactPhone,
} from "../constants";
import Link from "next/link";

type LinkProps = {
  children: React.ReactNode;
  url: string;
  newWindow?: boolean;
  noColor?: boolean;
};

export function Address(props: React.ComponentProps<"address">): JSX.Element {
  const url = `https://google.com/maps/?q=${ContactAddress}, ${ContactCity}`;
  const { className, ...otherProps } = props;

  return (
    <address className={`${className} not-italic`} {...otherProps}>
      <a href={url} target="_blank">
        <div className="font-bold">{ContactAddress}</div>
        <div>{ContactAddress2}</div>
        <div>{ContactCity}</div>
      </a>
    </address>
  );
}

export function Email() {
  return <Link href={`mailto:${ContactEmail}`}>{ContactEmail}</Link>;
}

export function Phone() {
  return <a href={`tel:${ContactPhone}`}>{ContactPhone}</a>;
}
