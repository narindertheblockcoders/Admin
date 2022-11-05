import { useRouter } from "next/router";
import { Alert } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
function DeleteModal(props) {
    console.log(props.id)
    const router= useRouter();
  async function deleteUser() {
    try{let res = await axios.post("/api/deleteuser", { id: props?.id });
    console.log(res.data)
    router.replace("/users");
}
    catch(e){console.log(e)}
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Delete USER
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Are you sure you want to delete this user?</h4>
        <Alert variant="danger">
          {" "}
          This action will remove the user from the database and you will not be
          able to recover or undo this action.
        </Alert>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={deleteUser}>
          Delete User
        </Button>
        <Button onClick={props.onHide}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default DeleteModal;
