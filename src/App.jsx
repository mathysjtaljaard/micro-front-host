import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import ErrorBoundary from "./ErrorBoundary"

const RemoteHeader = React.lazy(
  () => import("header/Header")
);

const RemoteDashboard = React.lazy(
  () => import("dashboard/Dashboard")
);

const { useStore, StoreProvider } = import("store/store")

import "./index.css";

const App = () => {
  try {
    const [store, dispatch] = useStore()
    return (
      <Suspense fallback={<h1>Loading Content</h1>}>
        <StoreProvider>
          <div>
            <p><b>Host App</b></p>
            <p>The app will not work without a store</p>
            <ErrorBoundary>
              <RemoteHeader count={store.count}></RemoteHeader>
            </ErrorBoundary>
            <ErrorBoundary>
              <RemoteDashboard dispatch={dispatch} />
            </ErrorBoundary>
            <footer>
              <p>Host Footer</p>
              <button onClick={() => { dispatch({ type: "decrement" }) }}>Decrement</button>
            </footer>
          </div>
        </StoreProvider>
      </Suspense>
    )
  } catch (error) {
    return <h1>Unable to load content</h1>
  }
}
ReactDOM.render(
  <App />, document.getElementById("app"));
