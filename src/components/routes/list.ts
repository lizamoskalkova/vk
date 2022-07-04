import Home from "../pages/home/home";

export const routes = [
    {
        path:'/',
        exact: true,
        component: Home,
        auth: true,
    },
    {
        path:'/profile/:id',
        exact: true,
        component: Home,
        auth: true,
    },
    {
        path:'/messages',
        exact: true,
        component: Home,
        auth: true,
    },
    {
        path:'/message/:id',
        exact: false,
        component: Home,
        auth: true,
    },
    {
        path:'/friends/:id',
        exact: true,
        component: Home,
        auth: true,
    },
    {
        path:'/auth',
        exact: true,
        component: Home,
        auth: false,
    },
]