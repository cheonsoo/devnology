import React from 'react';

export default function MarkdownIframe(props: any) {
  return (
    <div>
      <iframe src={props.src} />
    </div>
  );
}
