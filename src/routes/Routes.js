import { lazy } from 'react';
import PrivateRoute from './PrivateRoute';

const AccountSuccess = lazy(() => import('../pages/AccountSuccess'));
const CreateJobs = lazy(() => import('../pages/CreateJobs'));
const EditJobs = lazy(() => import('../pages/EditJobs'));
const ViewJobs = lazy(() => import('../pages/EditJobs'));
const Home = lazy(() => import('../pages/Home'));
const Jobs = lazy(() => import('../pages/Jobs'));

export const routes = [
  {
    name: 'Home',
    path: '/',
    element: <Home />,
  },
  {
    name: 'Home',
    path: '/home',
    element: <Home />,
  },
  {
    name: 'Jobs',
    path: '/jobs',
    element: (
      <PrivateRoute>
        <Jobs></Jobs>
      </PrivateRoute>
    ),
  },
  {
    name: 'Create Job',
    path: '/createjob',
    element: (
      <PrivateRoute>
        <CreateJobs />
      </PrivateRoute>
    ),
  },
  {
    name: 'Account Created',
    path: '/success',
    element: <AccountSuccess />,
  },
  {
    name: 'Edit Jobs',
    path: '/jobs/:ID',
    element: (
      <PrivateRoute>
        <EditJobs />
      </PrivateRoute>
    ),
  },
  {
    name: 'Edit Jobs',
    path: '/jobs/view/:ID',
    element: (
      <PrivateRoute>
        <ViewJobs />
      </PrivateRoute>
    ),
  },
];
