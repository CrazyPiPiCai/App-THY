/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Router, Scene } from "react-native-router-flux";

import RootView from "./component/RootView";
import SheetView from "./component/SheetView";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="home"
            component={RootView}
            title="二公司固定资产查询平台"
            initial={true}
          />
          <Scene key="sheet" component={SheetView} title="表" />
        </Scene>
      </Router>
    );
  }
}
