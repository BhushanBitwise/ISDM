import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

// Eager-load critical pages
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';

// Lazy-load the rest
const AboutPage = lazy(() => import('../pages/AboutPage'));
const ProgramsPage = lazy(() => import('../pages/ProgramsPage'));
const ProgramDetailPage = lazy(() => import('../pages/ProgramDetailPage'));
const CurriculumPage = lazy(() => import('../pages/CurriculumPage'));
const LearningExperiencePage = lazy(() => import('../pages/LearningExperiencePage'));
const EventsPage = lazy(() => import('../pages/EventsPage'));
const CareersPage = lazy(() => import('../pages/CareersPage'));
const LocationsPage = lazy(() => import('../pages/LocationsPage'));
const LocationDetailPage = lazy(() => import('../pages/LocationDetailPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const GalleryPage = lazy(() => import('../pages/GalleryPage'));
const PrivacyPolicyPage = lazy(() => import('../pages/PrivacyPolicyPage'));
const TermsPage = lazy(() => import('../pages/TermsPage'));

function PageLoader() {
  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'center', minHeight:'60vh', color:'var(--c-text-sec)', fontSize:'0.875rem'}}>
      <span>Loading…</span>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <Suspense fallback={<PageLoader />}><AboutPage /></Suspense> },
      { path: 'programs', element: <Suspense fallback={<PageLoader />}><ProgramsPage /></Suspense> },
      { path: 'programs/:slug', element: <Suspense fallback={<PageLoader />}><ProgramDetailPage /></Suspense> },
      { path: 'curriculum', element: <Suspense fallback={<PageLoader />}><CurriculumPage /></Suspense> },
      { path: 'learning-experience', element: <Suspense fallback={<PageLoader />}><LearningExperiencePage /></Suspense> },
      { path: 'events', element: <Suspense fallback={<PageLoader />}><EventsPage /></Suspense> },
      { path: 'careers', element: <Suspense fallback={<PageLoader />}><CareersPage /></Suspense> },
      { path: 'locations', element: <Suspense fallback={<PageLoader />}><LocationsPage /></Suspense> },
      { path: 'locations/:slug', element: <Suspense fallback={<PageLoader />}><LocationDetailPage /></Suspense> },
      { path: 'contact', element: <Suspense fallback={<PageLoader />}><ContactPage /></Suspense> },
      { path: 'gallery', element: <Suspense fallback={<PageLoader />}><GalleryPage /></Suspense> },
      { path: 'privacy-policy', element: <Suspense fallback={<PageLoader />}><PrivacyPolicyPage /></Suspense> },
      { path: 'terms-and-conditions', element: <Suspense fallback={<PageLoader />}><TermsPage /></Suspense> },
      { path: '404', element: <NotFoundPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
