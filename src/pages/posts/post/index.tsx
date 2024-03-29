import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { getPostsActionImpl } from '@/modules/posts/action';
import { getPost } from '@/api/posts';
import { isEmpty } from 'lodash';

import MarkdownContainer from '@/components/markdownContainer';
import PostList from '@/pages/posts';
import NoPost from '@/components/markdownContainer/noPost';
import Splitter from '@/components/atoms/Splitter';

import { TPost } from '@/types';

const StyledPostContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px 20px 20px 20px;
`;

const Post = () => {
  const [content, setContent] = useState('');

  const dispatch = useDispatch();
  const getPostsData = useCallback(() => dispatch(getPostsActionImpl()), [dispatch]);

  const posts: TPost[] = useSelector((state: RootStateOrAny) => state.posts.list);

  const params = useParams();

  useEffect(() => {
    if (isEmpty(posts)) {
      console.log('getting posts data ...');
      getPostsData();
    }

    if (!isEmpty(posts) && params.id) {
      const postInfo = posts.find((post) => post.id === params.id);
      if (postInfo) {
        console.log('getting post content ...');
        getPost(postInfo.path).then((data: string) => setContent(data));
      }
    }
  }, [posts]);

  return (
    <div>
      <div>
        <StyledPostContainer>{content ? <MarkdownContainer content={content} /> : <NoPost />}</StyledPostContainer>
      </div>

      <Splitter />

      {/* <div>
        <div>다른 포스트 보기</div>
        <PostList />
      </div> */}
    </div>
  );
};

export default Post;
