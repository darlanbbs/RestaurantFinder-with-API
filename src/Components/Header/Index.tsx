import { useState, FormEvent, ChangeEvent } from "react";
import { useForm } from "./../../Context/QueryContext";

import * as C from "./styles";

const Header = () => {
  const [value, setValue] = useState("");
  const { setUseContext, useContext } = useForm();
  const getResult = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setUseContext(value);
    setValue("");
  };

  return (
    <C.Container fluid>
      <C.Title>Pare de procurar um restaurante - encontre-o.</C.Title>
      <C.Form onSubmit={getResult}>
        <C.Input
          bsSize="lg"
          placeholder="Pesquise Restaurantes por Nome, Culinária, Localização"
          value={value}
          onChange={(e: ChangeEvent<HTMLFormElement>) =>
            setValue(e.target.value)
          }
        />
      </C.Form>
    </C.Container>
  );
};

export default Header;
