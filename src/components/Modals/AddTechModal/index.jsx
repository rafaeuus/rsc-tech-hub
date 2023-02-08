import AddTechForm from "../../Forms/AddTechForm";
import { StyledModalWrapper } from "../style";
import { StyledModalAddTech } from "./style";
import { AiOutlineClose } from "react-icons/ai";

const AddTechModal = ({ setAddTechModal }) => {
  return (
    <StyledModalWrapper>
      <StyledModalAddTech>
        <div>
          <h2>Cadastrar Tecnologia</h2>
          <button onClick={() => setAddTechModal(false)}>
            <AiOutlineClose className="close-icon" />
          </button>
        </div>
        <AddTechForm />
      </StyledModalAddTech>
    </StyledModalWrapper>
  );
};

export default AddTechModal;
