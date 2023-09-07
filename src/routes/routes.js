import config from '~/config';

import Home from '~/pages/Home';
import Customer from '~/pages/Customer';
import Employee from '~/pages/Employee';

const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.customer,
        component: Customer,
    },
    {
        path: config.routes.employee,
        component: Employee,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
