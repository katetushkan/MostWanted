import React from 'react';
import Table, { ITableHeaderDefinition } from "./components/Table/Table";

import './App.css';
import { dateFormatter } from "./services/DataFormatters/formatters";
import List from "./components/List/List";

function App() {

  const tableHeader: ITableHeaderDefinition[] = [
    {
      prop: 'name',
      label: 'Name',
      fixed: "left",
    },
    {
      prop: 'age',
      label: 'Age',
      sortable: true
    },
    {
      prop: 'bday',
      label: 'Birthday',
      render: (data: any) => <>{dateFormatter(data, "DD-MM/YY--78")}</> // TODO: ErrorBoundaries component
    },
    {
      prop: 'town', label: 'Hometown',
    },
    {
      prop: 'city', label: "City",
    },
    {
      prop: 'text', label: 'A lot of text',
    }
  ];

  const tableData = [
    {
      id: 6,
      name: 'Ivanov Ivan Ivanovich',
      age: '29',
      bday: new Date(1999, 11, 3),
      town: 'Mozyr',
      text: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
    },
    {
      id: 61,
      name: 'Ivanov Ivanovich',
      age: '-50',
      bday: new Date(1999, 11, 30),
      town: 'Mozyr',
      text: '.'
    },
    {
      id: 76,
      name: 'Ivan ',
      age: '29',
      bday: new Date(1999, 11, 30),
      town: 'Mozyr',
      text: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
    },
    {
      id: 63,
      name: 'Ivanov Ivanovich',
      age: '-50',
      bday: new Date(1999, 11, 30),
      town: 'Mozyr',
      text: '.'
    },
    {
      id: 68,
      name: 'Ivan ',
      age: '29',
      bday: new Date(1999, 11, 30),
      town: 'Mozyr',
      text: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
    },
  ]

  const sortParameters = ['age', 'name', 'bday', 'town', 'text']

  return (
    <div className="App">
      <div className="app_container">
        <List
          className="app_list"
          data={sortParameters}
        />
        <Table
          className="app_table"
          header={tableHeader}
          data={tableData}
          fixedHeader={true}
          // fixedRows={[61]}
        />
      </div>
    </div>
  );
}

export default App;
