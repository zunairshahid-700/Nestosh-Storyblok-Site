import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { storyblokInit, apiPlugin } from "@storyblok/react";

import Page from "./components/Page";
import Teaser from "./components/Teaser";
import Grid from "./components/Grid";
import Feature from "./components/Feature";
import Config from "./components/Config";
import AnnouncementBar from "./components/announcementBar";
import HeroSection from "./components/HeroSection";
import TextAndImage from "./components/TextAndImage";
import TextHeadingAndSubHeading from './components/TextHeadingAndSubHeading';
import TextAndImageBlock from './components/TextAndImageBlock';
import Services from "./components/Services";
import ServicesBlocks from "./components/ServicesBlocks";

storyblokInit({
  accessToken: "62wiGQO1wlQ8aYp58nPybwtt",
  use: [apiPlugin],
  components: {
    config: Config,
    announcementBar: AnnouncementBar,
    heroSection: HeroSection,
    TextAndImage: TextAndImage,
    TextHeadingAndSubHeading: TextHeadingAndSubHeading,
    TextAndImageBlock: TextAndImageBlock,
    Services: Services,
    ServicesBlocks: ServicesBlocks,
    page: Page,
    teaser: Teaser,
    grid: Grid,
    feature: Feature,

  },
  apiOptions: {
    region: 'US'
  }
});

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
