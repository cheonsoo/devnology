import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getPostsActionImpl } from '@/modules/posts/action';
import { RootState } from '@/modules';
import { TPost } from '@/types';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ListContainer = styled.div`
  margin: 50px;

  .table_posts {
    border-bottom: 5px solid #3e957b;

    .table_row {
      cursor: pointer;

      &:hover {
        background-color: #dddddd;
      }

      .table_cell {
        width: 100%;

        .table_cell_line {
          width: 100%;
          height: 30px;
          display: flex;
          justify-content: left;
          align-items: center;

          &.title {
            font-weight: 900;
          }
        }
      }
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

const Posts = () => {
  const posts: TPost[] = useSelector((state: RootState) => state.posts.list);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const getPostsData = useCallback(() => dispatch(getPostsActionImpl()), [dispatch]);

  useEffect(() => {
    getPostsData();
  }, []);

  const handleClickItem = (id: string): void => {
    navigate(`/post/${id}`);
  };

  return (
    <ListContainer>
      <TableContainer component={Paper}>
        <Table className="table_posts" sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">POSTS</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {posts
              .filter((post: TPost) => post.publish)
              .map((post: TPost, idx: number) => (
                <StyledTableRow className="table_row" key={idx} onClick={() => handleClickItem(post.id)}>
                  <StyledTableCell className="table_cell" component="th" scope="row">
                    <div className="table_cell_line title">{post.title}</div>
                    <div className="table_cell_line">{post.desc}</div>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ListContainer>
  );
};

export default Posts;
