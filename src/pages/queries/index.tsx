import { Divider, ScrollView } from "native-base";
import { CardAppointment } from "../../components/CardAppointment";
import { Title } from "../../components/Title";
import { ButtonComponent } from "../../components/Button";

export default function Queries() {
  return (
    <ScrollView p={5}>
      <Title color={"blue.500"}>Consultas</Title>
      <ButtonComponent mt={5} mb={5}>
        Agendar nova consulta
      </ButtonComponent>

      <Title color={"blue.500"} fontSize={"lg"} alignSelf={"flex-start"} mb={2}>
        Próximas consultas
      </Title>

      <CardAppointment
        name="Gustavo Veiga"
        specialty="Cardiologista"
        photo="https://github.com/guta307.png"
        date="12/09/1997"
        scheduled={true}
      />

      <Divider mt={5} />

      <Title color={"blue.500"} fontSize={"lg"} alignSelf={"flex-start"} mb={2}>
        Consultas passadas
      </Title>

      <CardAppointment
        name="Gustavo Veiga"
        specialty="Cardiologista"
        photo="https://github.com/guta307.png"
        date="12/09/1997"
        attended={true}
      />

      <CardAppointment
        name="Gustavo Veiga"
        specialty="Cardiologista"
        photo="https://github.com/guta307.png"
        date="12/09/1997"
        attended={true}
      />

      <CardAppointment
        name="Gustavo Veiga"
        specialty="Cardiologista"
        photo="https://github.com/guta307.png"
        date="12/09/1997"
        attended={true}
      />
    </ScrollView>
  );
}
