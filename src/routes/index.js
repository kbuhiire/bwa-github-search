import {useLocation, useNavigate, useRoutes} from "react-router-dom";
import {useEffect} from "react";
import Home from "views/Home";

import DetailPage from "views/DetailPage";

const Routes = ({theme, toggleTheme}) => {
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (location.pathname === '/') {
            navigate('search')
        }
    }, [location.pathname, navigate])

    return useRoutes([
        {
            path: 'search',
            element:(<Home toggleTheme={toggleTheme} theme={theme}/>),
            children: [
                {
                    path: ':searchTerm/:searchText',
                    element:<Home toggleTheme={toggleTheme} theme={theme}/>,
                },
            ]
        },
        {
            path: '/:searchTerm/:username',
            element:<DetailPage/>,
        },
        {
            path: '*',
            element:<h1>404 Page does not Exist</h1>,
        }
    ])
}

export default Routes;