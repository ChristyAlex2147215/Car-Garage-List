import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeCar } from '../store/index';
import classNames from 'classnames';

const headers = ['Car ID', 'Car Name', 'Car Cost'];

const CarList = () => {
  const dispatch = useDispatch();
  const carName = useSelector((state) => state.form.carname);
  let searchTerm = useSelector((state) => state.table.searchTerm);
  if(searchTerm==="")
  {
    searchTerm=" "
  }
  const tableBody = useSelector((state) => state.table.cars);

  const deleteItem = (itemId) => {
    dispatch(removeCar({ id: itemId }));
  };

  const matches = tableBody.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderTable = tableBody.map((item) => {
    const highlightClass = classNames({
      'font-bold text-lg': item.name.toLowerCase().includes(searchTerm.toLowerCase()),
    },
    {'text-red-500':item.name.toLowerCase()===carName},
    );

    return (
      <tr key={item.id} className={highlightClass}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.cost}</td>
        <td>
          <button onClick={() => deleteItem(item.id)}>Delete</button>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <table>
        <thead>
          <tr>{headers.map((item) => <td key={item}>{item}</td>)}</tr>
        </thead>
        <tbody>{renderTable}</tbody>
      </table>
    </div>
  );
};

export default CarList;
