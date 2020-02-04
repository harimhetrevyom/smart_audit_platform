import React from "react";
import { Redirect } from "react-router-dom";
// const Breadcrumbs = React.lazy(() => import("./views/Base/Breadcrumbs"));
// const Cards = React.lazy(() => import("./views/Base/Cards"));
// const Carousels = React.lazy(() => import("./views/Base/Carousels"));
// const Collapses = React.lazy(() => import("./views/Base/Collapses"));
// const Dropdowns = React.lazy(() => import("./views/Base/Dropdowns"));
// const Forms = React.lazy(() => import("./views/Base/Forms"));
// const Jumbotrons = React.lazy(() => import("./views/Base/Jumbotrons"));
// const ListGroups = React.lazy(() => import("./views/Base/ListGroups"));
// const Navbars = React.lazy(() => import("./views/Base/Navbars"));
// const Navs = React.lazy(() => import("./views/Base/Navs"));
// const Paginations = React.lazy(() => import("./views/Base/Paginations"));
// const Popovers = React.lazy(() => import("./views/Base/Popovers"));
// const ProgressBar = React.lazy(() => import("./views/Base/ProgressBar"));
// const Switches = React.lazy(() => import("./views/Base/Switches"));
// const Tables = React.lazy(() => import("./views/Base/Tables"));
// const Tabs = React.lazy(() => import("./views/Base/Tabs"));
// const Tooltips = React.lazy(() => import("./views/Base/Tooltips"));
// const BrandButtons = React.lazy(() => import("./views/Buttons/BrandButtons"));
// const ButtonDropdowns = React.lazy(() =>
//   import("./views/Buttons/ButtonDropdowns")
// );
// const ButtonGroups = React.lazy(() => import("./views/Buttons/ButtonGroups"));
// const Buttons = React.lazy(() => import("./views/Buttons/Buttons"));
// const Charts = React.lazy(() => import("./views/Charts"));
const Dashboard = React.lazy(() => import("./components/Dashboard"));



// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
console.log("login", localStorage.getItem('isLogged'));
let isLogged = localStorage.getItem('isLogged')
const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard } ,

 
];

export default routes;
