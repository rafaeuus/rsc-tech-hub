import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import Button from "../Button";
import { StyledUserTechs } from "./style";
import { GrAdd } from "react-icons/gr";
import { IconContext } from "react-icons";
import AddTechModal from "../Modals/AddTechModal";
import { TechContext } from "../../contexts/TechContext";
import { BsFillTrashFill } from "react-icons/bs";
import UpdateTechModal from "../Modals/UpdateTechModal";
import { ToastContainer } from "react-toastify";
import LoadingDots from "../LoadingDots";

const UserTechs = () => {
  const { user } = useContext(UserContext);
  const { deleteTech, loading } = useContext(TechContext);

  const [addtechModal, setAddTechModal] = useState(false);
  const [updateTechModal, setUpdateTechModal] = useState(false);

  const [selectedTech, setSelectedTech] = useState({});

  return (
    <IconContext.Provider value={{ className: "react-icons" }}>
      <div className="container">
        <StyledUserTechs>
          <div className="add-techs">
            <h3>Tecnologias</h3>
            <Button
              type="button"
              styleType="small"
              onClick={() => setAddTechModal(true)}
            >
              <GrAdd className="add-icon" />
            </Button>
          </div>

          <div className="techs-list">
            {loading ? (
              <LoadingDots />
            ) : (
              <ul>
                {user.techs.map((tech) => (
                  <li
                    key={tech.id}
                    onClick={(event) => {
                      if (event.target.tagName === "LI") {
                        setSelectedTech(tech);
                        setUpdateTechModal(true);
                      }
                    }}
                  >
                    <h3>{tech.title}</h3>
                    <div>
                      <p>{tech.status}</p>
                      <button
                        onClick={() => {
                          deleteTech(tech.id);
                        }}
                      >
                        <BsFillTrashFill className="icon-trash" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {/* <ul>
            {user.techs.map((tech) => (
              <li
                key={tech.id}
                onClick={(event) => {
                  if (event.target.tagName === "LI") {
                    setSelectedTech(tech);
                    setUpdateTechModal(true);
                  }
                }}
              >
                <h3>{tech.title}</h3>
                <div>
                  <p>{tech.status}</p>
                  <button
                    onClick={() => {
                      deleteTech(tech.id);
                    }}
                  >
                    <BsFillTrashFill className="icon-trash" />
                  </button>
                </div>
              </li>
            ))}
          </ul> */}
          {addtechModal && <AddTechModal setAddTechModal={setAddTechModal} />}
          {updateTechModal && (
            <UpdateTechModal
              selectedTech={selectedTech}
              setUpdateTechModal={setUpdateTechModal}
            />
          )}
          {}
          <ToastContainer toastClassName="toast" />
        </StyledUserTechs>
      </div>
    </IconContext.Provider>
  );
};

export default UserTechs;
