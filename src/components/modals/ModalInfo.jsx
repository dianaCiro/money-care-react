import { Button, CloseButton, Modal } from "react-bootstrap";

import "./Modal.css";
import { ModalTypes } from "./../../actiontypes/ModalTypes";

const ModalInfo = ({ modalInformation, dispatch }) => {
  const handleClose = () => {
    dispatch({
      type: ModalTypes.modifyVisualization,
      payload: {
        showModal: false,
      },
    });
  };

  return (
    <>
      <Modal
        show={modalInformation.showModal}
        onClick={handleClose}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          className={
            modalInformation.type === "error" ? "red-color" : "green-color"
          }
        >
          <Modal.Title className="modal-title">
            {modalInformation.title}
          </Modal.Title>
          <CloseButton onClick={handleClose} />
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            {modalInformation.type === "error" ? (
              <i className="fa fa-4x error-style">x</i>
            ) : (
              <i className="fa fa-check fa-4x mb-3 animated rotateIn"></i>
            )}

            <p>{modalInformation.message}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className={
              modalInformation.type === "error"
                ? "btn btn-danger"
                : "btn btn-success waves-effect waves-light"
            }
            variant="primary"
            onClick={handleClose}
          >
            Accept
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalInfo;
