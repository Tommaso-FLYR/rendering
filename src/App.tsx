import React from 'react';
import { Grid } from "./Grid";
import { Widget } from "./Widget";

export function App() {
  return (
    <div className="App" role="main">
      <Grid
        renderers={[
          (props) => (
            <Widget key={`1-${props.collapsed}`} {...props}>
              1
            </Widget>
          ),
          (props) => (
            <Widget key={`2-${props.collapsed}`} {...props}>
              2
            </Widget>
          ),
        ]}
      />
    </div>
  );
}
