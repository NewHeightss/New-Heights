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
  const { columns, rows } = props;
  //fetch call to db to get data, formatted into array of instances
  //add edit button to each instance
  // async function getJobData() {
  //   const data = await fetch('/Endpoint');
  //   //parsed data - CHECK THIS FOR ACCURACY
  //   const jobApps = data.json();
  //   try {
  //     jobApps.map((job, index) => {
  //       //create new tableRow
  //       //assign unique key
  //       <Button>Edit</Button>;
  //       // <Row  />
  //       // <Table.Row key=`${index+1}`>
  //       //   <Table.Cell></Table.Cell>
  //       // </Table.Row>
  //     });
  //   } catch (err) {}
  // }
  //EXAMPLE


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
