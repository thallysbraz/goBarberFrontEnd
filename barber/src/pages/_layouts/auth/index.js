import React from "react";
import PropsTypes from "prop-types";

import { Wrapper } from "./styles";

export default function AuthLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

AuthLayout.propTypes = {
  children: PropsTypes.element.isRequired
};
