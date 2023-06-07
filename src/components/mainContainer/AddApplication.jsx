import React, { useState } from 'react';
import {
  Dropdown,
  Modal,
  Button,
  Text,
  Input,
  Row,
  Checkbox,
  useInput
} from '@nextui-org/react';

export default function AddApplication(props) {
  const {columns, rows, setRows} = props;

  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = React.useState('Status');

    const handleDropDownChange = (selectedValue) => {
      const selectedArray = [...selectedValue];
      const selectedVal = selectedArray[0]
      console.log('selectedValue: ', selectedVal);
      setSelected(selectedVal);

    };

  // const selectedValue = React.useMemo(
  //   () => Array.from(selected).join(', ').replaceAll('_', ' '),
  //   [selected]
  // );
    // console.log('selected: ', selected)
//declare useInput hooks for each field
const { value, reset, bindings } = useInput("");
const companyInput = useInput('');
const dateInput = useInput('');
const positionInput = useInput('');
const cityInput = useInput('');
const notesInput = useInput('');
const statusInput = useInput('');
const applicationInput = useInput('');
const listingInput = useInput('');

  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log('closed');
  };

  const handleSubmit = (event) => {
    console.log(selected)
    const formData = {
      company_name: companyInput.value,
      date_applied: dateInput.value,
      position_name: positionInput.value,
      city_name: cityInput.value,
      notes_txt: notesInput.value,
      status: selected,
      application_type: applicationInput.value,
      listing_link: listingInput.value,
    };
  
    fetch('http://localhost:3000/application', {
      method: 'POST',
      headers : {'content-type': 'application/json'},
      body: JSON.stringify({
      company_name: formData.company_name,
      date_applied: formData.date_applied,
      position_name: formData.position_name,
      city_name: formData.city_name,
      notes_txt: formData.notes_txt,
      status: formData.status,
      application_type: formData.application_type,
      listing_link: formData.listing_link,
      user_id: 1,
      length: rows.length
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log('data response form server: ', data)
      console.log('[...rows, newJob]: ', [...rows, data])
      setRows([...rows, data]);
      closeHandler()
    })
    .catch(err => {
      console.log('could not add new data into table')
    })
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
            aria-label='text'
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Company Name"
            {...companyInput.bindings}
            // onChange={(e) => {setRows()}}
          />

          <Input
            aria-label='text'
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Date Applied"
            {...dateInput.bindings}
          />
          <Input
           aria-label='text'
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Position"
            {...positionInput.bindings}
          />
          <Input
            aria-label='text'
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="City"
            {...cityInput.bindings}
          />
          <Input
            aria-label='text'
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Notes"
            {...notesInput.bindings}
          />
          <Dropdown>
            <Dropdown.Button flat>{selected}</Dropdown.Button>
            <Dropdown.Menu
              aria-label="Single selection actions"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selected}
              onSelectionChange={handleDropDownChange}
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
            {...applicationInput.bindings}
          />
          <Input
            aria-label='text'
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Link To Listing"
            {...listingInput.bindings}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>
          <Button auto onPress={handleSubmit}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
