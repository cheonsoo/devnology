import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import MarkdownContainer from '@/components/markdownContainer';
import NoPost from '@/components/markdownContainer/noPost';

const StyledPostContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px 20px 20px 20px;
`;

const About: React.FC = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    getPost();
  }, []);

  const getPost = (_id: string) => {
    const url = `http://static.devnology.co.kr/files/posts/about/index.md`;
    axios({
      url,
      method: 'GET',
    })
      .then((res) => res.data)
      .then((data) => setContent(data));
  };

  return <StyledPostContainer>{content ? <MarkdownContainer content={content} /> : <NoPost />}</StyledPostContainer>;
};

export default About;
