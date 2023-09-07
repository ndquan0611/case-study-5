import config from '~/config';

import Home from '~/pages/Home';
import Customer from '~/pages/Customer';
import Employee from '~/pages/Employee';
import Service from '~/pages/Service';
import Contract from '~/pages/Contract';
import ServiceCreate from '~/pages/Service/ServiceCreate';

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
    {
        path: config.routes.service,
        component: Service,
    },
    {
        path: config.routes.serviceCreate,
        component: ServiceCreate,
    },
    {
        path: config.routes.contract,
        component: Contract,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
