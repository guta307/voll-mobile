import { Text, Avatar, VStack, IWrapProps } from "native-base";
import { ButtonComponent } from "../Button";
import { InterfaceVStackProps } from "native-base/lib/typescript/components/primitives/Stack/VStack";

interface CardProps extends InterfaceVStackProps {
  name: string;
  photo: string;
  specialty: string;
  date?: string;
  attended?: boolean;
  scheduled?: boolean;
}

export const CardAppointment = ({
  name,
  photo,
  specialty,
  attended = false,
  scheduled = false,
  date,
  ...rest
}: CardProps) => {
  return (
    <VStack
      w="100%"
      bg={attended ? "blue.100" : "white"}
      p={5}
      borderRadius={"lg"}
      mb={5}
      shadow={"2"}
      {...rest}
    >
      <VStack flexDir={"row"}>
        <Avatar size={"lg"} source={{ uri: photo }} />
        <VStack pl={4}>
          <Text fontSize={"md"} fontWeight={"bold"}>
            {name}
          </Text>
          <Text>{specialty}</Text>
          <Text>{date}</Text>
        </VStack>
      </VStack>

      <ButtonComponent mt={4}>
        {scheduled ? "Cancelar" : "Agendar consulta"}
      </ButtonComponent>
    </VStack>
  );
};
