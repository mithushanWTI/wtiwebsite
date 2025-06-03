// src/ga.js
import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-MY2RXR9ZL5");
};

export const logPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};
