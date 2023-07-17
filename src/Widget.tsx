import React from 'react';
import { PropsWithChildren, useEffect } from "react";

export function Widget(
  props: PropsWithChildren<{
    collapsed: boolean;
    setCollapsed: () => void;
    setExpanded: () => void;
  }>
) {
  useEffect(() => {
    console.log("mounted", props.children);
    return () => {
      console.log("unmounted", props.children);
    };
  });
  return (
    <button
      style={{
        backgroundColor: "#87d8b4",
      }}
      onClick={props.collapsed ? props.setExpanded : props.setCollapsed}
    >
      {props.children} {props.collapsed ? "collapsed" : "expanded"}
    </button>
  );
}
