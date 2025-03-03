"use client";

import React from "react";
import Script from "next/script";

export default function Instafeed() {
  const attachResizeScript = () => {
    const container = document.getElementById("instafeed");
    const scriptTag = document.createElement("script");
    scriptTag.innerHTML = `iFrameResize();`;
    container.appendChild(scriptTag);
  };

  return (
    <div id="instafeed">
      <Script
        src={"https://embedsocial.com/js/iframe.js"}
        strategy="lazyOnload"
        onLoad={() => {
          attachResizeScript();
        }}
      />
      <iframe
        scrolling="no"
        className="border-0 w-full h-full outline-none"
        src="https://embedsocial.com/api/pro_hashtag/452596ad137455437bd45a2f508ad1a299fa2762"
      />
    </div>
  )
}

