import { Box, ScrollView } from "native-base";
import { InputComponent } from "../../components/Input";
import { ButtonComponent } from "../../components/Button";
import { Title } from "../../components/Title";
import { CardAppointment } from "../../components/CardAppointment";

export default function Explorer() {
  return (
    <ScrollView flex={1} p={5}>
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

      <Title color={"blue.500"} mb={5}>
        Resultado da busca
      </Title>

      <CardAppointment
        alignItems={"center"}
        name="Gustavo Veiga"
        specialty="Cardiologista"
        photo="https://github.com/guta307.png"
      />

      <CardAppointment
        alignItems={"center"}
        name="Gustavo Veiga"
        specialty="Cardiologista"
        photo="https://github.com/guta307.png"
      />

      <CardAppointment
        alignItems={"center"}
        name="Gustavo Veiga"
        specialty="Cardiologista"
        photo="https://github.com/guta307.png"
      />

      <CardAppointment
        alignItems={"center"}
        name="Gustavo Veiga"
        specialty="Cardiologista"
        photo="https://github.com/guta307.png"
      />
    </ScrollView>
  );
}
