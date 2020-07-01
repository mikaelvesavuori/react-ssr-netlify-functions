import React from "react";
import PropTypes from "prop-types";

const DemoComponent = (props) => <div {...props}>{props.children}</div>;

DemoComponent.propTypes = {};

DemoComponent.defaultProps = {};

export default DemoComponent;
