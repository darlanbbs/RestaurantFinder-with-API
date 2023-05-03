import Header from "../../Components/Header/Index";
import ModalDetails from "../../Components/ModalDetails/Index";
import * as C from "./styles";

const Homepage = () => {
  return (
    <div>
      <Header />
      <C.Container>
        <ModalDetails />
      </C.Container>
    </div>
  );
};

export default Homepage;
