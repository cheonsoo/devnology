import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getApps } from '@/modules/apps/action';
import { RootState } from '@/modules';
import { TypeApps } from '@/types';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ListContainer = styled.ul`
  width: 100%;
  height: 100%;
  list-style: none;

  li {
    width: 85%;
    min-height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: left;
    border: 1px solid gray;
    border-radius: 8px;
    margin-bottom: 10px;
    cursor: pointer;
    padding: 10px 20px;

    > div {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: left;
    }

    > div:nth-child(1) {
      font-weight: 900;
      margin-bottom: 10px;
    }
    > div:nth-child(1) {
    }
  }
`;

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#3E957B',
    color: '#fff',
    fontWeight: '900',
    borderRadius: '8px 8px 0 0'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}));

const StyledTableRow = styled(TableRow)(() => ({
  '&:nth-of-type(odd)': {
    // backgroundColor: theme.palette.action.hover
    backgroundColor: '#eeeeee'
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}));

const Apps: React.FC = () => {
  const apps: TypeApps = useSelector((state: RootState) => state.apps.list);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const getAppsData = useCallback(() => dispatch(getApps()), [dispatch]);

  useEffect(() => {
    getAppsData();
  }, []);

  useEffect(() => {
    console.log('### apps');
    console.log(apps);
  }, [apps]);

  const handleClickItem = (id: string) => {
    navigate(`/app/${id}`);
  };

  return (
    // <div>apps</div>
    <ListContainer>
      <TableContainer component={Paper}>
        <Table className="table_posts" sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">APPS</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {apps
              .filter((app) => app.publish)
              .map((app: any, idx: number) => (
                <StyledTableRow className="table_row" key={idx} onClick={() => handleClickItem(app.id)}>
                  <StyledTableCell className="table_cell" component="th" scope="row">
                    <div className="table_cell_line title">{app.title}</div>
                    <div className="table_cell_line">{app.desc}</div>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ListContainer>

    // <div>
    //   <ListContainer>
    //     {Object.keys(apps).map(
    //       (key: string, idx: number) =>
    //         apps[key].publish && (
    //           <li key={idx} onClick={() => handleClickItem(key)}>
    //             <div>{apps[key].title}</div>
    //             <div>{apps[key].desc}</div>
    //           </li>
    //         )
    //     )}
    //   </ListContainer>
    // </div>
  );
};

export default Apps;
