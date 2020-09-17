import React from "react";
import propTypes from "prop-types";
export default function Section(props) {
  const className = ["section"];
  className.push(props.className);
  if (props.isCenteredContent) className.push("center-content");
  return <Section className={className.join(" ")}> {props.children} </Section>;
}
Section.propTypes = {
  isCenteredContent: propTypes.bool,
  className: propTypes.string,
};
