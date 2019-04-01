import React from "react";
import asyncComponent from "../components/Boundle/Boundle";
import {
  Route,Redirect
} from "react-router-dom";
const routes = [
  {
    path:'/sign',
    component:asyncComponent(() => import("../pages/login/login"))
  },
  {
    path: "/main",
    component: asyncComponent(() => import("../App")),
    children:[
      {
        path: "/main/button",
        component: asyncComponent(() => import('../components/Button/Button')),
      },
      {
        path: "/main/datepicker",
        component: asyncComponent(() => import('../components/DatePicker/DatePicker'))
      },
      {
        path: "/main/select",
        component: asyncComponent(() => import('../components/Select/Select'))
      },
      {
        path: "/main/pagination",
        component: asyncComponent(() => import('../components/Pagination/Pagination'))
      },
      {
        path: "/main/category",
        component: asyncComponent(() => import('../pages/category/category'))
      },
      {
        path: "/main/echarts",
        component: asyncComponent(() => import('../pages/echarts/Echarts'))
      }
    ]
  }
  
];

const RouteConfigExample = () => (
  <div>
    {routes.map((route, i) => 
      (<Route  key={i}
        path={route.path}
        render={props => <route.component {...props} routes={route.children} />}
      />
    ))}
  </div>
);

export default RouteConfigExample();
