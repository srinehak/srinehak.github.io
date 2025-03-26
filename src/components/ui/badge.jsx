import * as React from "react";

const Badge = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={className}
    {...props}
  />
));
Badge.displayName = "Badge";

export { Badge };
