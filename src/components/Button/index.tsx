import { Button, IButtonProps } from "native-base";
import { Children, ReactNode } from "react";

interface ButtonComponentProps extends IButtonProps {
  children: ReactNode;
}

export const ButtonComponent = ({
  children,
  ...rest
}: ButtonComponentProps) => {
  return (
    <Button w={"100%"} bg="blue.800" mt={10} borderRadius={"lg"} {...rest}>
      {children}
    </Button>
  );
};
