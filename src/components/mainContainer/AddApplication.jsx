import React , {useState} from "react";
import { Dropdown, Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
// import { Mail } from "./Mail";
// import { Password } from "./Password";

export default function AddApplication() {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState('Status');
  
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  return (
    <div>
      <Button auto shadow onPress={handler}>
        Add Job Application
      </Button>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Add New Job Application
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Company Name"
            // contentLeft={<Mail fill="currentColor" />}
          />
          
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Date Applied"
            // contentLeft={<Password fill="currentColor" />}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Position"
            // contentLeft={<Mail fill="currentColor" />}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="City"
            // contentLeft={<Mail fill="currentColor" />}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Notes"
            // contentLeft={<Mail fill="currentColor" />}
          />
          <Dropdown>
            <Dropdown.Button flat>Status</Dropdown.Button>
            <Dropdown.Menu aria-label="Single selection actions">
              <Dropdown.Item key="applied">Applied</Dropdown.Item>
              <Dropdown.Item key="phoneScreen">Phone Screen</Dropdown.Item>
              <Dropdown.Item key="behavioralInterview">Behavioral Interview</Dropdown.Item>
              <Dropdown.Item key="technicalInterview">
                Technical Interview
              </Dropdown.Item>
              <Dropdown.Item key="ghosted">Ghosted</Dropdown.Item>
              <Dropdown.Item key="offer">Offer</Dropdown.Item>
              <Dropdown.Item key="rejectedOffer">Rejected Offer</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Application Type"
            // contentLeft={<Mail fill="currentColor" />}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Link To Listing"
            // contentLeft={<Mail fill="currentColor" />}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>
          <Button auto onPress={closeHandler}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
