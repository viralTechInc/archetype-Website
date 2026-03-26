import { createBrowserRouter } from 'react-router';
import { Home } from './pages/Home';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { AboutPage } from './pages/AboutPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/contact',
    Component: ContactPage,
  },
  {
    path: '/privacy',
    Component: PrivacyPage,
  },
  {
    path: '/terms',
    Component: TermsPage,
  },
  {
    path: '/about',
    Component: AboutPage,
  },
]);