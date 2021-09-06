import './CellList.css';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import CellListItem from './cell-list-item';
import AddCell from './cell-list-item/add-cell';
import React, { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';

const CellList: React.FC = () => {
  const cells = useTypedSelector(({ cells: { order, data } }) => order.map((id: any) => data[id]));

  const { fetchCells, saveCells } = useActions();

  useEffect(() => {
    fetchCells();
    // eslint-disable-next-line
  }, []);

  const renderedCells = cells.map((cell: any) => (
    <React.Fragment key={cell.id}>
      <CellListItem cell={cell} />
      <AddCell previousCellId={cell.id} />
    </React.Fragment>
  ));

  return (
    <div className="cell-list">
      <AddCell visible={cells.length === 0} previousCellId={null} />
      {renderedCells}
    </div>
  );
};

export default CellList;
