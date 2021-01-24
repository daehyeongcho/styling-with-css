import React from "react";
import classNames from "classnames";
import "./Button.scss";

const Button = ({ children, size, color, outline, fullWidth, ...rest }) => {
  return (
    // outline이 true일때만 적용
    <button
      className={classNames("Button", size, color, { outline, fullWidth })}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  size: "medium",
  color: "blue",
};

export default Button;
