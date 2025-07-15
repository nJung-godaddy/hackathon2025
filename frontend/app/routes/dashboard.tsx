import React from "react";
import ComponentA from "./crisis-alert";
import ComponentB from "./platforms";
import ComponentC from "./action-center";
import ComponentD from "./recent-activity";

export default function Dashboard() {
  return (
    <>
      <h1 style={{ fontWeight: 'bold', fontSize: '2.5rem', paddingTop: '2rem', paddingLeft: '2rem', margin: 0 }}>
        Crisis Kit
      </h1>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 24, padding: 32, alignItems: 'start' }}>
        <ComponentA />
        <ComponentB />
        <ComponentC />
        <ComponentD />
      </div>
    </>
  );
} 