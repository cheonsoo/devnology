import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import MarkDownImage from './markdownImage';
import MarkDownCodeBlock from './markdownCodeBlock';
import MarkDownH1 from './markdownH1';
import MarkDownH2 from './markdownH2';
import MarkDownBlockQuote from './markdownBlockQuote';
// import MarkDownIframe from './markdownIframe';
import NoPost from './noPost';

// @ts-ignore
import rehypeRaw from "rehype-raw";
// @ts-ignore
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";

import './style.scss';
interface IPost {
  content: string;
}

const MarkdownContainer: React.FC<IPost> = ({ content = '' }) => {
  return (
    <>
      <div>
        {content ? (
          <ReactMarkdown
            allowDangerousHtml={true}
            components={{
              code: MarkDownCodeBlock,
              img: MarkDownImage,
              h1: MarkDownH1,
              h2: MarkDownH2,
              blockquote: MarkDownBlockQuote,
              p: ({ node, ...props }) => <span {...props} style={{ margin: '10px', display: 'block' }}></span>,
              table: ({ node, ...props }) => <table className="markdown-table" {...props}></table>,
              // blockquote: ({ node, ...props }) => <div style={{ color: 'red' }} {...props}></div>,
              // h2: ({ node, ...props }) => <div style={{ color: 'red' }} {...props}></div>,
            }}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[
              rehypeRaw,
              rehypeSanitize({
                ...defaultSchema,
                attributes: {
                  ...defaultSchema.attributes,
                  iframe: [...(defaultSchema.attributes.iframe || [])],
                },
              }),
            ]}
          >
            {content}
          </ReactMarkdown>
        ) : (
          <NoPost />
        )}
      </div>
    </>
  );
};

export default React.memo(MarkdownContainer);
