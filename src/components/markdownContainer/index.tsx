import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface IPost {
  content: string
};

const InlineCodeBlock = styled.div`
  background: #e9e9e9;
  padding: 20px;
  border-radius: 8px;
`;
function InlineCode(children: any) {
  return (<InlineCodeBlock>{ children.children[0] }</InlineCodeBlock>);
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
const NoMarkdownContentDiv = styled.div`
  width: 900px;
  height: 500px;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  font-weight: 900;
  font-size: 30px;
`;

const MarkdownContainer: React.FC<IPost> = ({ content = '' }) => {
  return (<MarkdownContainerDiv>
    <MarkdownInnerDiv>
      { content ? (
      <ReactMarkdown
        children={content}
        components={{
          code: InlineCode
        }}
        remarkPlugins={[remarkGfm]}
      />) : (<NoMarkdownContentDiv>No Post Yet</NoMarkdownContentDiv>)}
    </MarkdownInnerDiv>
  </MarkdownContainerDiv>);
};

export default MarkdownContainer;
