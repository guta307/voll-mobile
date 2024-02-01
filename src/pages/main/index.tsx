import { Box, Divider, Image, ScrollView, Text } from "native-base";
import Logo from "../../assets/Global/Logo.png";
import { Title } from "../../components/Title";
import { InputComponent } from "../../components/Input";
import { ButtonComponent } from "../../components/Button";

const Depoiments = [
  {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur rhoncus nisl quis ante feugiat faucibus. Quisque ut euismod felis, eu dapibus dolor.",
    name: "Gustavo Veiga",
    age: "22 anos",
    adress: "São Paulo/SP",
  },
  {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur rhoncus nisl quis ante feugiat faucibus. Quisque ut euismod felis, eu dapibus dolor.",
    name: "Gustavo Veiga",
    age: "22 anos",
    adress: "São Paulo/SP",
  },
  {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur rhoncus nisl quis ante feugiat faucibus. Quisque ut euismod felis, eu dapibus dolor.",
    name: "Gustavo Veiga",
    age: "22 anos",
    adress: "São Paulo/SP",
  },
];

export default function Main() {
  return (
    <ScrollView flex={1} p={5}>
      <Image source={Logo} alt="Logo Voll" />

      <Title color={"blue.500"} alignSelf={"flex-start"} mb={5}>
        Boas-vindas!
      </Title>

      <Box w="100%" p={5} borderRadius={"xl"} bg={"white"} shadow={"5"}>
        <InputComponent
          mb={5}
          placeholder="Digite a especialidade"
          shadow={"5"}
          bg={"white"}
        />
        <InputComponent
          mb={5}
          placeholder="Digite a especialidade"
          bg={"white"}
          shadow={5}
        />
        <ButtonComponent p={5} mt={0}>
          Buscar
        </ButtonComponent>
      </Box>

      <Title color={"blue.800"} mb={5}>
        Depoimentos
      </Title>

      {Depoiments.map((value, index) => {
        return (
          <Box key={index} width={"100%"} mb={5}>
            <Text color={"gray.500"} fontSize={"md"} mb={2}>
              {value.content}
            </Text>

            <Text
              fontWeight={"bold"}
              color={"gray.600"}
              fontSize={"md"}
              alignSelf={"center"}
              mb={5}
            >
              {value.name}, {value.age}, {value.adress}
            </Text>
            <Divider />
          </Box>
        );
      })}
    </ScrollView>
  );
}
