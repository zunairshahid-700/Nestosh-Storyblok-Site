import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import { useStoryblok, StoryblokComponent } from '@storyblok/react';
import Layout from './components/globalComponents/Layout';

const StoryblokPage = ({ slug }) => {
  const story = useStoryblok(slug, { version: 'draft' });

  if (!story || !story.content) {
    return <div>Refresh your page...</div>;
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
