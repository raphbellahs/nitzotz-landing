import classNames from "classnames";

// Define the Container component
export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;  // Type for child elements
  className?: string;         // Optional additional CSS classes
}) => {
  return (
    <div className={classNames("mx-auto max-w-[120rem] px-8", className)}>
      {children}
    </div>
  );
};

// 1. This is a functional component named 'Container'.
// 2. It takes two props:
//    - children: This is the content that will be wrapped by the container.
//    - className: This is an optional string for additional CSS classes.
// 3. The component returns a <div> element with some CSS classes:
//    - "mx-auto": Centers the container horizontally
//    - "max-w-[120rem]": Sets a maximum width of 120rem
//    - "px-8": Adds horizontal padding of 8 units
//    - Any additional classes passed via the className prop
// 4. The classNames function is used to combine the default classes with any additional classes.
// 5. {children} renders the content passed to the Container component.