import { AiOutlineClose } from "react-icons/ai";
import UpdateTechForm from "../../Forms/UpdateTechForm";
import { StyledModalWrapper } from "../style";
import { StyledModalUpdateTech } from "./style";

const UpdateTechModal = ({ selectedTech, setUpdateTechModal }) => {
  return (
    <StyledModalWrapper>
      <StyledModalUpdateTech>
        <div>
          <h2>Cadastrar Tecnologia</h2>
          <button onClick={() => setUpdateTechModal(false)}>
            <AiOutlineClose className="close-icon" />
          </button>
        </div>
        <UpdateTechForm selectedTech={selectedTech} />
      </StyledModalUpdateTech>
    </StyledModalWrapper>
  );
};

export default UpdateTechModal;
