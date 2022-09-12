import React from "react";

const ExternalLink = ({ href, children }) => {
  return (
    <a
      href={href}
      className="font-semibold text-primary transition duration-300 ease-in-out"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default ExternalLink;
