// import logo from './logo.svg';
import './App.css';

import { ConfigProvider } from 'antd';
import 'antd/dist/antd.css';
import zhCN from 'antd/es/locale/zh_CN';
import { Switch, Route, Redirect } from 'react-router-dom';
// moment包被其它组件依赖，已存在于node_modules，不用另外安装
import moment from "moment";
// import { isLogined } from '@utils/auth';
// import { publicRoutes } from './routers';
import Home from '@pages/home/';
import NotFound from '@pages/notFound/';
// import ApiLoading from '@com/apiLoading';

moment.locale("zh-cn");

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <Switch>
        <Route path="/myhismap" component={Home} />
        <Route path="/404" component={NotFound} />
        <Redirect to="/myhismap" from="/" exact />
        <Redirect to="/404" />
      </Switch>
    </ConfigProvider>
  );
}

export default App;
