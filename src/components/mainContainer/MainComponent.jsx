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
// import Row from 'TableRow.jsx';

export default function MainComponent() {
  const columns = [
    {
      key: 'company_name',
      label: 'Company Name',
    },
    {
      key: 'date_applied',
      label: 'Date Applied',
    },
    {
      key: 'position_name',
      label: 'Position',
    },
    {
      key: 'city_name',
      label: 'City',
    },
    {
      key: 'notes_txt',
      label: 'Notes',
    },
    {
      key: 'status',
      label: 'Status',
    },
    {
      key: 'application_type',
      label: 'Application Type',
    },
    {
      key: 'listing_link',
      label: 'Link To Listing',
    },
    {
      key: 'action',
      label: '',
    },
  ];
  // const [cell, setCell] = useState(rows)
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
  const rows = [
    {
      key: '1',
      company_name: 'Disney',
      date_applied: '11/23/2011',
      position_name: 'Senior Engineer',
      city_name: 'Remote',
      notes_txt: 'I like it',
      status: 'applied',
      application_type: 'applied',
      listing_link: 'http:asdfasdf.com',
    },
  ];

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
