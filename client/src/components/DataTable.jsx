import React, { useMemo } from 'react';
import { useTable, useSortBy, usePagination } from 'react-table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const DataTable = ({ data }) => {
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
      {
        Header: 'People',
        accessor: 'People',
      },
      {
        Header: 'DATE',
        accessor: 'Date',
      },
      {
        Header: 'TAG',
        accessor: 'TAG',
      },
      {
        Header: 'STATUS',
        accessor: 'STATUS',
      },
    ],
    []
  );

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

  return (
    <>
      <table
        {...getTableProps()}
        className="border bg-white table text-left round-radius"
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={column.id === 'STATUS' ? 'left' : ''}
                >
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  let cellClassName = '';

                  if (cell.column.id === 'STATUS') {
                    const status = cell.value;
                    if (status === 'Completed') {
                      cellClassName = 'completed';
                    } else if (status === 'Processing') {
                      cellClassName = 'processing';
                    } else if (status === 'Rejected') {
                      cellClassName = 'rejected';
                    } else if (status === 'On-hold') {
                      cellClassName = 'hold';
                    } else if (status === 'In Transit') {
                      cellClassName = 'transit';
                    }
                  }
                  return (
                    <td
                      {...cell.getCellProps()}
                      className={`${cellClassName} ${
                        cell.column.id === 'TAG' ? 'mw' : ''
                      }`}
                    >
                      <span>{cell.render('Cell')}</span>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <div className="text-muted small d-flex justify-content-between align-items-center">
          <div>
            Showing {pageIndex * pageSize + 1}-
            {Math.min((pageIndex + 1) * pageSize, data.length)} of {data.length}
          </div>
          <div className="d-flex">
            <button
              className="btn border px-2 btn-light"
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button
              className="mx-1 btn border px-2 btn-light"
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataTable;
