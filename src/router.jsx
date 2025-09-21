import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import NavigationComponent from './components/NavigationComponent.jsx';

import AboutPage from './pages/AboutPage.jsx';
import BrowsePage from './pages/BrowsePage.jsx';
import RandomPage from './pages/RandomPage.jsx';
import TrendingPage from './pages/TrendingPage.jsx';

function RootLayout()
{
    return <>
        <NavigationComponent />
        <Outlet />
    </>
}

function AppRoutes () 
{
    const routes = createBrowserRouter
    (
        [
            {
                path: '/',
                element: <RootLayout />,
                children: 
                [
                    {index: true, element: <TrendingPage /> },
                    {path: 'trending', element: <TrendingPage /> },
                    {path: 'about', element: <AboutPage /> },
                    {path: 'browse', element: <BrowsePage /> },
                    {path: 'random', element: <RandomPage /> },
                ]
            }
        ]
    );

    return <RouterProvider router={routes}/>

}

export default AppRoutes;