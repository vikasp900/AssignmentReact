import React, { useState } from 'react';
import { useTable, useRowSelect } from 'react-table';

const jsonData = [
  {
    id: 0,
    name: 'Uthappizza',
    price: 4.99
  },
  {
    id: 1,
    name: 'Zucchipakoda',
    price: 1.99
  },
  {
    id: 2,
    name: 'Vadonut',
    price: 1.99
  },
  {
    id: 3,
    name: 'ElaiCheese Cake',
    price: 2.99
  },
  {
    id: 4,
    name: 'Guntur chillies',
    price: 0.99
  },
  {
    id: 5,
    name: 'Buffalo Paneer',
    price: 5.99
  },
  {
    id: 6,
    name: 'Cherry Tomatoes',
    price: 9.99
  },
  {
    id: 7,
    name: 'Goat Milk',
    price: 1.99
  },
  {
    id: 8,
    name: 'Rose breasted Grosbeak chicken',
    price: 7.99
  },
  {
    id: 9,
    name: 'Toenail Zingy',
    price: 0.99
  }
];

const Table = () => {
  const [data, setData] = useState(jsonData);

  const handleSave = () => {
    
    console.log('Saving data:', data);
    
  };

  const handleChange = (id, key, value) => {
    
    const updatedData = data.map(name => {
      if (name.id === id) {
        return { ...name, [key]: value };
      }
      return name;
    });
    setData(updatedData);
  };

  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id'
      },
      {
        Header: 'Name',
        accessor: 'name'
      },
      {
        Header: 'Price',
        accessor: 'price',
        Cell: ({ row, value }) => (
          <input
            type="number"
            value={value}
            onChange={e => handleChange(row.original.id, 'price', e.target.value)}
          />
        )
      }
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data }, useRowSelect);

  return (
    <div>
      <table {...getTableProps()} className="table">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()} className="table-row">
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} className="table-header">
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="table-row">
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()} className="table-cell">
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Table;
