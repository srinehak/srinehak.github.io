import * as React from "react";

const Button = React.forwardRef(({ className, variant, ...props }, ref) => (
  <button
    ref={ref}
    className={className}
    {...props}
  />
));
Button.displayName = "Button";

export { Button };
