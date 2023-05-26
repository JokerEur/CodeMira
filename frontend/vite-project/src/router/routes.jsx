// import About from "../pages/About";
import {LOGIN_ROUTE, HOME_ROUTE, OBJECT_ROUTE, ACCOUNT_ROUTE} from "../utils/consts";
import Auth from "../pages/Auth";
import Account from "../pages/user/Account";
import Object from "../pages/Object";
import Home from "../pages/Home";
import AccountFarm from "../pages/farmer/Account";
import ObjectFarm from "../pages/farmer/SendOrder";
import Create from "../pages/farmer/CreateStuff";
import AccountAdmin from "../pages/admin/Account";
// import Protocol from "../pages/Protocol";

export const privateRoutes = [
    {path: '/', Component: <Home/>, exact: true},
    {path: ACCOUNT_ROUTE, Component: <Account/>, exact: true},
    // // {path: '/about', component: About, exact: true},
    {path: OBJECT_ROUTE, Component: <Object/>, exact: true},
    ]
export const farmRoutes = [
    {path: '/', Component: <AccountFarm/>, exact: true},
    {path: '/object/date', Component: <ObjectFarm/>, exact: true},
    {path: '/object/create', Component: <Create/>, exact: true},
    ]

export const adminRoutes = [
    {path: '/', Component: <AccountAdmin/>, exact: true},
    ]

export const publicRoutes = [
    {path: LOGIN_ROUTE, Component: <Auth/>, exact: true},
]
