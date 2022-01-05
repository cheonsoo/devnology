import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MarkdownContainer from '@/components/markdownContainer'

const Post: React.FC = () => {
  const [content, setContent] = useState('');
  const params = useParams();

  useEffect(() => {
    console.log(`### post id: ${params.id}`);
    const markdown = require(`@/static/posts/${params.id}/${params.id}.md`);
    setContent(markdown.default);
  }, []);

  return (<MarkdownContainer content={content} />);
};

export default Post;
