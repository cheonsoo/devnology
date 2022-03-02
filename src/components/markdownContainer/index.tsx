import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import MarkDownImage from '@/components/markdownContainer/markdownImage';
import MarkDownCodeBlock from '@/components/markdownContainer/markdownCodeBlock';
import NoPost from '@/components/markdownContainer/noPost';
interface IPost {
  content: string
};

const MarkdownContainerDiv = styled.div`
  width: 100%;
  min-height: 500px;
  display: flex;
  align-items: top;
  justify-content: center;
`;
const MarkdownInnerDiv = styled.div`
  width: 900px
`;

const MarkdownContainer: React.FC<IPost> = ({ content = '' }) => {
  return (<MarkdownContainerDiv>
    <MarkdownInnerDiv>
      { content ? (
      <ReactMarkdown
        children={content}
        components={{
          code: MarkDownCodeBlock,
          img: MarkDownImage
        }}
        remarkPlugins={[remarkGfm]}
      />) : (<NoPost />)}
    </MarkdownInnerDiv>
  </MarkdownContainerDiv>);
};

export default MarkdownContainer;
