import { Image, Box, Checkbox, ScrollView, Text } from "native-base";
import Logo from "../../assets/Global/Logo.png";
import { Title } from "../../components/Title";
import { ButtonComponent } from "../../components/Button";
import { InputComponent } from "../../components/Input";
import { useState } from "react";
import { Entries } from "../../utils/subscriptionEntries";
import { background } from "native-base/lib/typescript/theme/styled-system";

export default function Subscription() {
  const [Session, setSession] = useState(0);

  function nextSession() {
    if (Session < Entries.length - 1) {
      setSession(Session + 1);
    }
  }

  function returnSession() {
    if (Session > 0) {
      setSession(Session - 1);
    }
  }
  return (
    <ScrollView flex={1} p={5}>
      <Image alignSelf={"center"} source={Logo} alt="Logo Voll" />
      <Title>{Entries[Session].title}</Title>

      <Box>
        {Session === 2 && (
          <Text
            color={"blue.800"}
            fontWeight={"bold"}
            fontSize={"md"}
            mt={2}
            mb={2}
          >
            Selecione o plano
          </Text>
        )}
        {Entries[Session].textEntry?.map((value) => {
          return (
            <InputComponent
              bg={"gray.100"}
              _focus={{ backgroundColor: "gray.100" }}
              label={value.label}
              placeholder={value.placeholder}
              key={value.id}
            />
          );
        })}
      </Box>
      <Box>
        {Entries[Session].checkbox?.map((item) => {
          return (
            <Checkbox key={item.id} value={item.value}>
              {item.value}
            </Checkbox>
          );
        })}
      </Box>
      {Session > 0 && (
        <ButtonComponent
          onPress={() => {
            returnSession();
          }}
          bgColor={"gray.400"}
        >
          Voltar
        </ButtonComponent>
      )}

      <ButtonComponent
        mb={20}
        onPress={() => {
          nextSession();
        }}
      >
        Avançar
      </ButtonComponent>
    </ScrollView>
  );
}
