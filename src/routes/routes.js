import config from '~/config';

import Home from '~/pages/Home';
import Customer from '~/pages/Customer';
import Employee from '~/pages/Employee';
import Service from '~/pages/Service';
import Contract from '~/pages/Contract';
import ServiceCreate from '~/pages/Service/ServiceCreate';
import ServiceUpdate from '~/pages/Service/ServiceUpdate';
import CustomerCreate from '~/pages/Customer/CustomerCreate';
import CustomerUpdate from '~/pages/Customer/CustomerUpdate';
import ContractCreate from '~/pages/Contract/ContractCreate';

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
        path: config.routes.customerCreate,
        component: CustomerCreate,
    },
    {
        path: config.routes.customerUpdate,
        component: CustomerUpdate,
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
        path: config.routes.serviceUpdate,
        component: ServiceUpdate,
    },
    {
        path: config.routes.contract,
        component: Contract,
    },
    {
        path: config.routes.contractCreate,
        component: ContractCreate,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
