import { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import * as C from "./styles";
import Map from "../Map/Index";

function ModalMap() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <C.BarItems>
        <Button color="danger" onClick={toggle}>
          <img src="./mapButton.png" alt="" />
        </Button>
      </C.BarItems>
      <Modal isOpen={modal} toggle={toggle} fullscreen>
        <ModalHeader toggle={toggle}>
          Procurando por restaurantes mais próximos de você!
        </ModalHeader>
        <ModalBody>
          <Map />
        </ModalBody>
        <ModalFooter>
          {" "}
          <Button color="secondary" onClick={toggle}>
            Fechar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalMap;
