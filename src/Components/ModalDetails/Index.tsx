import { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Card,
  CardHeader,
  CardText,
  CardTitle,
  List,
} from "reactstrap";
import RestaurantCards from "../RestaurantCards/Index";
import { useSelector } from "react-redux";

type ModalDetailsProps = {
  toggle?: () => void;
};

function ModalDetails({ toggle }: ModalDetailsProps) {
  const [modal, setModal] = useState(false);
  const { restaurantSelected } = useSelector((state: any) => state.restaurants);

  return (
    <>
      <div onClick={() => setModal(true)}>
        <RestaurantCards />
      </div>
      {restaurantSelected?.length > 0 && (
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Detalhes</ModalHeader>
          <ModalBody>
            <Card body>
              <CardHeader tag="h5">
                Nome: {restaurantSelected?.[0].name}
              </CardHeader>
              <CardTitle tag="h4">Local</CardTitle>
              <CardText tag={"h6"}>
                {restaurantSelected?.[0].formatted_address}
              </CardText>
              <CardTitle tag="h4">Número</CardTitle>
              <CardText tag="h6">
                {restaurantSelected?.[0].formatted_phone_number}
              </CardText>
              <CardText tag={"h4"}>Dias Aberto</CardText>
              {restaurantSelected?.[0].opening_hours?.weekday_text.map(
                (item: any) => (
                  <List type="unstyled">
                    <CardText tag="h6">{item}</CardText>
                  </List>
                )
              )}
            </Card>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>
              Fechar
            </Button>
          </ModalFooter>
        </Modal>
      )}
    </>
  );
}

export default ModalDetails;
