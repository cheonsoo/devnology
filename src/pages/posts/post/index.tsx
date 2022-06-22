import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { getPostsActionImpl, getPostActionImpl } from '@/modules/posts/action';
import { getPost } from '@/api/posts';
import { isEmpty } from 'lodash';

import MarkdownContainer from '@/components/markdownContainer';
import NoPost from '@/components/markdownContainer/noPost';

import { TPost } from '@/types';

const StyledPostContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px 20px 20px 20px;
`;

const Post: React.FC = () => {
  const [id, setId] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();
  const getPostsData = useCallback(() => dispatch(getPostsActionImpl()), [dispatch]);
  const getPostData = useCallback((id: string, path: string) => dispatch(getPostActionImpl(id, path)), [dispatch]);
  // const id = 'astar';

  const posts: TPost[] = useSelector((state: RootStateOrAny) => state.posts.list);
  const post: TPost = useSelector((state: RootStateOrAny) => {
    const data = state.posts.list.find((item: any) => item.id === id);
    console.log('data', data);
    return data;
  });

  const params = useParams();

  useEffect(() => {
    console.log('### id', params.id);
    if (params.id) setId(params.id);
  }, []);

  useEffect(() => {
    if (isEmpty(posts)) {
      console.log('getting posts data ...');
      getPostsData();
    }

    if (!isEmpty(posts) && params.id) {
      const postInfo = posts.find((post) => post.id === params.id);

      // if (postInfo) getPost(postInfo.path).then((data: string) => setContent(data));
      if (postInfo && postInfo.path) {
        console.log('postInfo', postInfo);
        getPostData(postInfo.id, postInfo.path);
      }
    }
  }, [posts]);

  return (
    <StyledPostContainer>
      {post.content ? <MarkdownContainer content={post.content} /> : <NoPost />}
    </StyledPostContainer>
  );
  // return <StyledPostContainer>{content ? <MarkdownContainer content={content} /> : <NoPost />}</StyledPostContainer>;
};

export default Post;
