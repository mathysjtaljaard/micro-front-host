import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { useStore, StoreProvider } from "store/store";
import ErrorBoundary from "./ErrorBoundary"
import RemoteHeader from "header/Header"
import RemoteDashboard from "dashboard/Dashboard"

import "./index.css";

const App = () => {
  const [store, dispatch] = useStore();

  return (
    <div>
      <p><b>Host App</b></p>
      <p>The app will not work without a store</p>
      <ErrorBoundary>
        <RemoteHeader count={store.count}></RemoteHeader>
      </ErrorBoundary>
      <ErrorBoundary>
        <RemoteDashboard dispatch={dispatch}/>
      </ErrorBoundary>
      <footer>
        <p>Host Footer</p>
        <button onClick={() => {dispatch({type: "decrement"})}}>Decrement</button>
      </footer>
    </div>
  )
}
ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>
    <StoreProvider>
      <App></App>
    </StoreProvider>
  </Suspense>, document.getElementById("app"));
