/**
 * Created by Administrator on 2016/8/3.
 */
import 'babel-core/polyfill'
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {Router, Route, browserHistory, IndexRoute, Redirect} from 'react-router'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import App from './containers/App'
import Dashboard from './containers/Dashboard'
import LoginContainer from './containers/Login'
import Developing from './containers/Developing'
import configureStore from './store/configureStore'
import StatisticalReportContainer from './containers/statisticalReport/StatisticalReportContainer'
import PolicyContainer from './containers/policyManage/PolicyContainer'
import DetailPolicy from './containers/policyManage/DetailPolicy'
import FieldsManage from './containers/fieldsManage/FieldsManage'
import ListManage from './containers/listManage/ListManage'
import PreAudit from './containers/preAudit/PreAudit'
import AfterLoanMonitor from './containers/afterLoanMonitor/AfterLoanMonitor'
import CallManage from './containers/callManage/CallManage'
import CallDetail from './containers/callManage/CallDetail'
import CallList from './containers/callManage/CallList'

let store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Dashboard}/>
                <Route path="dashboard" component={Dashboard}/>
                <Route path="/Developing" component={Developing}/>
                <Route path="/login" component={LoginContainer}/>
                <Route path="/statisticalReport" component={StatisticalReportContainer}/>
                <Route path="/policyManage" component={PolicyContainer}/>
                <Route path="/policyDetail" component={DetailPolicy}/>
                <Route path="/fieldsManage" component={FieldsManage}/>
                <Route path="/listManage" component={ListManage}/>
                <Route path="/preAudit" component={PreAudit}/>
                <Route path="/afterLoanMonitor" component={AfterLoanMonitor}/>
                <Route path="/CallDetail" component={CallDetail}/>
                <Route path="/callManage" component={CallList}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('wrap')
)



