import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getPosts } from '@/modules/posts/action';
import { RootState } from '@/modules';
import { TypePosts } from '@/types';

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
  const posts: TypePosts = useSelector((state: RootState) => state.posts.list);
  // const posts: ObjType = useSelector((state: RootStateOrAny) => state.posts.posts);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const getPostsData = useCallback(() => dispatch(getPosts()), [dispatch]);

  useEffect(() => {
    getPostsData();
  }, []);

  const handleClickItem = (key: string) => {
    navigate(`/post/${key}`);
  };

  return (
    <div>
      <ListContainer>
        {Object.keys(posts).map(
          (key: string, idx: number) =>
            posts[key].publish && (
              <li key={idx} onClick={() => handleClickItem(key)}>
                <div>{posts[key].title}</div>
                <div>{posts[key].desc}</div>
              </li>
            )
        )}
      </ListContainer>
    </div>
  );
};

export default Posts;
