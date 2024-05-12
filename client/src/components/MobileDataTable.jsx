import React, { useMemo, useState } from 'react';
import { useTable, useSortBy, usePagination } from 'react-table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const MobileDataTable = ({ data }) => {
  const columns = useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'ID',
      },
      {
        Header: 'Description',
        accessor: 'Description',
      },
    ],
    []
  );

  const [expandedRow, setExpandedRow] = useState(null);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 9 },
    },
    useSortBy,
    usePagination
  );

  const toggleRow = (rowIndex) => {
    if (expandedRow === rowIndex) {
      setExpandedRow(null);
    } else {
      setExpandedRow(rowIndex);
    }
  };

  return (
    <>
    <h1 className="h2 p-2 ">Tasks</h1>
      <table {...getTableProps()} className="border bg-white table text-left round-radius">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, index) => {
            prepareRow(row);
            const isExpanded = expandedRow === index;
            return (
              <React.Fragment key={row.id}>
                <tr {...row.getRowProps()} onClick={() => toggleRow(index)}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()} className={'cellClassName'}>
                      <span>{cell.render('Cell')}</span>
                    </td>
                  ))}
                </tr>
                {isExpanded && (
                  <tr>
                    <td colSpan={columns.length}>
                      {/* Render additional details here */}
                      <div>
                        {/* Additional details */}
                        <p>People: {data[row.index].People}</p>
                        <p>Date: {data[row.index].Date}</p>
                        <p>Tag: {data[row.index].TAG}</p>
                        <p>Status: {data[row.index].STATUS}</p>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
      <div>
        <div className="text-muted small d-flex justify-content-between align-items-center">
          <div>
            Showing {pageIndex * pageSize + 1}-{Math.min((pageIndex + 1) * pageSize, data.length)} of{' '}
            {data.length}
          </div>
          <div className="d-flex">
            <button className="btn border px-2 btn-light" onClick={() => previousPage()} disabled={!canPreviousPage}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button className="mx-1 btn border px-2 btn-light" onClick={() => nextPage()} disabled={!canNextPage}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileDataTable;
