import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import ContactConsultationHub from './pages/contact-consultation-hub-multi-channel-communication-center';
import Homepage from './pages/homepage-ai-technology-solutions-hub';
import GlobalClientStoriesPage from './pages/global-client-stories-cultural-intelligence-showcase';
import AboutTrupTechPage from './pages/about-trup-tech-trust-technology-story';
import SolutionsExplorer from './pages/solutions-explorer-interactive-service-discovery';
import LiveProjectObservatory from './pages/live-project-observatory-real-time-work-showcase';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<AboutTrupTechPage />} />
        <Route path="/contact-consultation-hub-multi-channel-communication-center" element={<ContactConsultationHub />} />
        <Route path="/homepage-ai-technology-solutions-hub" element={<Homepage />} />
        <Route path="/global-client-stories-cultural-intelligence-showcase" element={<GlobalClientStoriesPage />} />
        <Route path="/about-trup-tech-trust-technology-story" element={<AboutTrupTechPage />} />
        <Route path="/solutions-explorer-interactive-service-discovery" element={<SolutionsExplorer />} />
        <Route path="/live-project-observatory-real-time-work-showcase" element={<LiveProjectObservatory />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
