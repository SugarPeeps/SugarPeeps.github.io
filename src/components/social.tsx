import React from "react";
import { InstagramUrl, FacebookUrl } from "../constants";
import { Instagram, Facebook } from "react-feather";
import { Link } from "./structure";

export function FacebookLink() {
  return (
    <Link url={FacebookUrl} newWindow noColor>
      <Facebook />
    </Link>
  );
}

export function InstagramLink() {
  return (
    <Link url={InstagramUrl} newWindow noColor>
      <Instagram />
    </Link>
  );
}
