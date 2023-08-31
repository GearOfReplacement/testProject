import { RouteObject, createBrowserRouter } from 'react-router-dom';
import { Login } from '../pages/login/Login';
import { Event } from '../pages/event/Event';
// import { useTypedSelector } from '../hooks/useTypedSelector';

const enum PosibleRoutes {
	LOGIN = '/Login',
	EVENT = '/',
}

const publicRoutes: RouteObject[] = [
	{
		path: PosibleRoutes.LOGIN,
		element: <Login />
	},
];

const privateRoutes: RouteObject[] = [
	{
		path: PosibleRoutes.EVENT,
		element: <Event />,
	},
];

// const isAuth = useTypedSelector(state => state.auth);
const isAuth = false;
const currentRoutes = isAuth ? privateRoutes: publicRoutes;

const AppRouter = createBrowserRouter(currentRoutes);
export { AppRouter }
