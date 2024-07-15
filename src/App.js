import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import { useStoryblok, StoryblokComponent } from '@storyblok/react';
import Layout from './components/globalComponents/Layout';
import './App.css'

const StoryblokPage = ({ slug }) => {
  const [retryCount, setRetryCount] = useState(0);
  const story = useStoryblok(slug, { version: 'draft' });

  useEffect(() => {
    if ((!story || !story.content) && retryCount < 3) {
      const timer = setTimeout(() => {
        setRetryCount((prevCount) => prevCount + 1);
      }, 2000); // Retry after 2 seconds

      return () => clearTimeout(timer);
    }
  }, [story, retryCount]);

  if (!story || !story.content) {
    return <div>Loading content, please wait...</div>;
  }

  return <StoryblokComponent blok={story.content} />;
};

const DynamicPage = () => {
  const { slug } = useParams();
  return <StoryblokPage slug={slug} />;
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<StoryblokPage slug="home" />} />
          <Route path="/:slug" element={<DynamicPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
