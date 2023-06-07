import React from 'react';
import {
  Table,
  Row,
  Col,
  Tooltip,
  User,
  Text,
  Button,
} from '@nextui-org/react';
// import AddApplication from './AddApplication.jsx';

export default function MainComponent(props) {
  const { columns, rows, setRows } = props;
  //fetch call to db to get data, formatted into array of instances
  //add edit button to each instance
  // async function getJobData() {
  //   try {
  //     const data = await fetch('/application/1');
  //     console.log('data: ', data)
  //     const jobApps = await data.json();
  //     console.log('jobApps: ', jobApps)

  //     jobApps.map((job, index) => {
  //       //create new tableRow
  //       setRows([...job])
  //       console.log('rows:' , rows)
  //     });
  //   } catch (err) {
  //     throw new Error ('cannot populate table with getJobData function')
  //   }
  // }
  function getJobData() {
    fetch('/application/1')
      .then(response => response.json())
      .then((data) => {
        console.log('data: ', data)
        setRows([...data]);
        return data
      })
      .catch((err) => 'cant populate table')
      .finally(() => console.log('Fulfilled promise!'));

   
  }
  getJobData();
  
  function renderCell(job, columnKey) {
    console.log('job: ', job);
    console.log('column: ', columnKey);
    if (columnKey === 'action') {
      return (
        <Row>
          <Col>
            <Button>Edit</Button>
          </Col>
        </Row>
      );
    }
    return (
      <Col>
        <Row>
          <Text b size={13} css={{ tt: 'capitalize', color: '$accents7' }}>
            {job[columnKey]}
          </Text>
        </Row>
      </Col>
    );
  }

  return (
    <Table
      aria-label="Example table with dynamic content"
      css={{
        height: 'auto',
        minWidth: '100%',
      }}
    >
      <Table.Header columns={columns}>
        {(column) => (
          <Table.Column key={column.key}>{column.label}</Table.Column>
        )}
      </Table.Header>

      {rows && <Table.Body items={rows}>
        {(item) => (
          <Table.Row key={item.key}>
            {(columnKey) => (
              <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
            )}
          </Table.Row>
        )}
      </Table.Body>}
      
      
    </Table>
  );
}
