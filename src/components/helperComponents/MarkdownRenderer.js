import React from 'react';
import he from 'he'; 
import { marked } from 'marked';

const MarkdownRenderer = ({ markdown }) => {
  const createMarkup = (markdown) => {
    // Decode HTML entities
    const decodedHTML = he.decode(markdown);
    // Convert markdown to HTML
    return { __html: marked(decodedHTML) };
  };

  return <div dangerouslySetInnerHTML={createMarkup(markdown)} />;
};

export default MarkdownRenderer;
