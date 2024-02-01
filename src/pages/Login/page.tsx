import {
  Image,
  VStack,
  Text,
  Box,
  FormControl,
  Input,
  Button,
  Link,
} from "native-base";
import Logo from "../../assets/Global/Logo.png";
import { TouchableOpacity } from "react-native";
import { Title } from "../../components/Title";
import { ButtonComponent } from "../../components/Button";
import { InputComponent } from "../../components/Input";

export default function Login({ navigation }) {
  return (
    <VStack flex={1} alignItems={"center"} justifyContent={"center"} p={5}>
      <Image source={Logo} alt="Logo Voll" />
      <Title>Faça login em sua conta</Title>

      <Box>
        <InputComponent
          bg={"gray.100"}
          label="Email"
          placeholder="Insira seu endereço de email"
        />

        <FormControl mt={3}>
          <FormControl.Label>Senha</FormControl.Label>
          <InputComponent
            bg={"gray.100"}
            label="Senha"
            placeholder="Insira sua senha"
          />
        </FormControl>
      </Box>

      <ButtonComponent
        onPress={() => {
          navigation.navigate("Tabs");
        }}
      >
        Entrar
      </ButtonComponent>

      <Link href="https://www.alura.com.br" mt={2}>
        Esqueceu sua Senha
      </Link>

      <Box mt={8} w="100%" flexDirection={"row"} justifyContent={"center"}>
        <Text>Ainda não tem cadastro?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Subscription");
          }}
        >
          <Text color={"blue.500"}>Faça seu cadastro!</Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}
