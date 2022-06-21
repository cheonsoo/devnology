import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getPostsAction } from '@/modules/posts/action';
import { RootState } from '@/modules';
import { TPost } from '@/types';

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

const Posts: React.FC = () => {
  const posts: TPost[] = useSelector((state: RootState) => state.posts.list);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const getPostsData = useCallback(() => dispatch(getPostsAction()), [dispatch]);

  useEffect(() => {
    getPostsData();
  }, []);

  const handleClickItem = (id: string): void => {
    navigate(`/post/${id}`);
  };

  return (
    <div>
      <ListContainer>
        {posts.map(
          (post: TPost, idx: number) =>
            post.publish && (
              <li key={idx} onClick={() => handleClickItem(post.id)}>
                <div>{post.title}</div>
                <div>{post.desc}</div>
              </li>
            )
        )}
      </ListContainer>
    </div>
  );
};

export default Posts;
