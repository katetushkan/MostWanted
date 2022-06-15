import React, { useState } from 'react';
import { dateFormatter } from './services/DataFormatters/formatters';

import Table, { ITableHeaderDefinition } from './components/Table/Table';
import List from './components/List/List';
import VirtualizedList from './components/VirtualizedList/VirtualizedList';
import Scroll from './components/Scroll/Scroll';
import Select from './components/Select/Select';

import './App.css';
import Switch from "./components/Switch/Switch";
import { IconName } from "./components/Icon/Icon";
import Toggle from "./components/Toggle/Toggle";

function App() {

  const tableHeader: ITableHeaderDefinition[] = [
    {
      prop: 'name',
      label: 'Name',
      fixed: 'left',
    },
    {
      prop: 'age',
      label: 'Age',
      sortable: true
    },
    {
      prop: 'bday',
      label: 'Birthday',
      render: (data: any) => <>{dateFormatter(data, 'DD-MM/YY--78')}</> // TODO: ErrorBoundaries component
    },
    {
      prop: 'town', label: 'Hometown',
    },
    {
      prop: 'city', label: 'City',
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

  const sortParameters = ['age', 'name', 'bday', 'town', 'text', 'ag1e', 'nam1e', 'bd1ay', 'tow1n', 'text1', 'age1', 'nam13e', 'bd3ay', 't4own', 't6ext']
  const switchPrams = [
    {
      value: '0',
      label: 'label0',
      // img: 'check',
    },
    {
      value: '1',
      label: 'label1',
      // img: 'check',
    },
    {
      value: '2',
      label: 'label2',
      // img: 'check',
    },
  ]

  const switchPramsImg = [
    {
      value: '0',
      label: 'label',
      img: 'check' as IconName,
    },
    {
      value: '1',
      label: 'label',
      img: 'check' as IconName,
    },
    {
      value: '2',
      label: 'label',
      img: 'check' as IconName,
    },
  ]
  const [toggleState, setToggleState] = useState(false);
  return (
    <div className='App'>
      <div className='app_container'>
        <div>
          <Scroll>
            <List
              className='app_list'
              data={sortParameters}
            />
          </Scroll>
        </div>

        <VirtualizedList
          className='app_virtualized-list'
          data={sortParameters}
          itemSize={20}
          margin={15}
        />
        <Switch
          options={switchPrams}
          className='app_switch'
          checked={'1'}
        />
        <Switch
          options={switchPramsImg}
          className='app_switch_img'
          checked={'0'}
        />
        <Toggle
          className='app_toggle'
          value={'toggle'}
          name={'toggle'}
          label={'WHere did u go?'}
          checked={toggleState}
          onToggle={(value) => setToggleState(value)}
        />
        <Select
          id='drop-down'
          data={sortParameters}
          className='app_select'
        />
        <Table
          className='app_table'
          header={tableHeader}
          data={tableData}
          fixedHeader={true}
          // fixedRows={[61]}
        />
      </div>
      x
    </div>
  );
}

export default App;
