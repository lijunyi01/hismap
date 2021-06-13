import React from 'react';
// import Siderlayout from '@/layout/siderlayout';
// import { privateRoutes } from '@/routers';
// import { Switch, Route, Redirect } from 'react-router-dom';
import HisMap from './map/';
// import TimeLine from '@pages/Home/TimeLine';
// import PageLoading from '@com/pageLoading';

export default function index(props) {

    return (
        <div style={{ height: "100%" }}>
            <div>head</div>
            <HisMap />
        </div>

    )
}
