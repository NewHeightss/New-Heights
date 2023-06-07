import React, { useState } from 'react';
import {
  Dropdown,
  Modal,
  Button,
  Text,
  Input,
  Row,
  Checkbox,
} from '@nextui-org/react';

export default function AddApplication(props) {
  const {columns, rows, setRows} = props;

  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = React.useState(new Set(['text']));

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(', ').replaceAll('_', ' '),
    [selected]
  );

  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log('closed');
  };

  const populateTable = (data) => {
    console.log(Input.value);
    closeHandler();
  }

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
            aria-label='text'
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Company Name"
            onChange={(e) => {setRows()}}
          />

          <Input
            aria-label='text'
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Date Applied"
          />
          <Input
           aria-label='text'
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Position"
          />
          <Input
            aria-label='text'
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="City"
          />
          <Input
            aria-label='text'
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Notes"
          />
          <Dropdown>
            <Dropdown.Button flat>{selectedValue}</Dropdown.Button>
            <Dropdown.Menu
              aria-label="Single selection actions"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selected}
              onSelectionChange={setSelected}
            >
              <Dropdown.Item key="applied">Applied</Dropdown.Item>
              <Dropdown.Item key="phoneScreen">Phone Screen</Dropdown.Item>
              <Dropdown.Item key="behavioralInterview">
                Behavioral Interview
              </Dropdown.Item>
              <Dropdown.Item key="technicalInterview">
                Technical Interview
              </Dropdown.Item>
              <Dropdown.Item key="ghosted">Ghosted</Dropdown.Item>
              <Dropdown.Item key="offer">Offer</Dropdown.Item>
              <Dropdown.Item key="rejectedOffer">Rejected Offer</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Input
            aria-label='text'
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Application Type"
          />
          <Input
            aria-label='text'
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Link To Listing"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>
          <Button auto onPress={() => {populateTable(Input.value)}}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
