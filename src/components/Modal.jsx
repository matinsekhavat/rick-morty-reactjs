import { XCircleIcon } from "@heroicons/react/24/outline";
import { useCharacterContext } from "../context/CharacterContext";

function Modal() {
  const { isFavModalOpen, dispatch } = useCharacterContext();

  console.log(isFavModalOpen);
  if (!isFavModalOpen) return null;
  return (
    <div>
      <div className="backdrop"></div>
      <div className="modal">
        <div className="modal__header">
          <h2 className="title">x</h2>
          <button onClick={() => onOpen(false)}>
            <XCircleIcon className="icon close" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
