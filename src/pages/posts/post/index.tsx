import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { getPosts } from '@/modules/posts/action';
import { isEmpty } from 'lodash';

import MarkdownContainer from '@/components/markdownContainer';
import NoPost from '@/components/markdownContainer/noPost';

type ObjType = {
  [key: string]: {
    [path: string]: string | boolean;
  };
};

const StyledPostContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px 20px 20px 20px;
`;

const Post: React.FC = () => {
  const [content, setContent] = useState('');

  const dispatch = useDispatch();
  const getPostsData = useCallback(() => dispatch(getPosts()), [dispatch]);

  const posts: ObjType = useSelector((state: RootStateOrAny) => state.posts.posts);

  const params = useParams();

  useEffect(() => {
    console.log('### id', params.id);
  }, []);

  useEffect(() => {
    if (isEmpty(posts)) {
      console.log('getting posts data ...');
      getPostsData();
    }

    if (!isEmpty(posts) && params.id) getPost(params.id);
  }, [posts]);

  const getPost = (_id: string) => {
    const postInfo = posts[_id];
    const url = `http://static.devnology.co.kr/files/posts${postInfo.path}`;
    axios({
      url,
      method: 'GET',
    })
      .then((res) => res.data)
      .then((data) => setContent(data));
  };

  return <StyledPostContainer>{content ? <MarkdownContainer content={content} /> : <NoPost />}</StyledPostContainer>;
};

export default Post;
