import { Input, IInputProps, FormControl } from "native-base";

interface InputProps extends IInputProps {
  placeholder: string;
  label?: string;
}

export const InputComponent = ({
  placeholder,
  label = null,
  ...rest
}: InputProps) => {
  return (
    <FormControl mt={3}>
      {label && <FormControl.Label>{label}</FormControl.Label>}
      <Input
        size="lg"
        w="100%"
        borderRadius={"lg"}
        shadow={3}
        placeholder={placeholder}
        {...rest}
      />
    </FormControl>
  );
};
