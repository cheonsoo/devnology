import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { getPosts, getPostContent } from '@/modules/posts/action';
import { isEmpty } from 'lodash';

import MarkdownContainer from '@/components/markdownContainer';
import NoPost from '@/components/markdownContainer/noPost';

import { TypePosts } from '@/types';

const StyledPostContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px 20px 20px 20px;
`;

const Post: React.FC = () => {
  const [content, setContent] = useState('');

  const dispatch = useDispatch();
  const getPostsData = useCallback(() => dispatch(getPosts()), [dispatch]);

  const posts: TypePosts = useSelector((state: RootStateOrAny) => state.posts.list);

  const params = useParams();

  useEffect(() => {
    console.log('### id', params.id);
  }, []);

  useEffect(() => {
    if (isEmpty(posts)) {
      console.log('getting posts data ...');
      getPostsData();
    }

    if (!isEmpty(posts) && params.id) {
      const postInfo = posts[params.id];
      getPostContent(postInfo.path).then((data: string) => setContent(data));
    }
  }, [posts]);

  return <StyledPostContainer>{content ? <MarkdownContainer content={content} /> : <NoPost />}</StyledPostContainer>;
};

export default Post;
