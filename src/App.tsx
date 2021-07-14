import "@fontsource/noto-sans";

import { useEffect } from "react";
import { DataFrame } from "@datadog/vis-core";
import { TimeseriesViz } from "@datadog/vis-draw";

const now = Date.now();
const oneHourAgo = now - 3600 * 1000;
const twoHoursAgo = now - 7200 * 1000;

// Scalar columns can contain numbers or nulls.
const columnConfig = [
  {
    id: "timestamp",
    kind: "scalar" as const,
    values: [now, oneHourAgo, twoHoursAgo, now, oneHourAgo, twoHoursAgo],
    meta: {}
  },
  {
    id: "value",
    kind: "scalar" as const,
    values: [30, 60, 80, 10, 20, 30],
    meta: {}
  },
  {
    id: "key",
    kind: "string" as const,
    values: ["Snowy", "Snowy", "Snowy", "Odie", "Odie", "Odie"],
    meta: {}
  }
];

const dataFrame = DataFrame.fromColumns(columnConfig);

export default function App() {
  const elementId = "my-viz";
  useEffect(() => {
    const viz = new TimeseriesViz(`#${elementId}`);

    viz.draw(dataFrame);
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editings to see some magic happen!</h2>
      <div id={elementId} style={{ height: 300 }}>
        {" "}
      </div>
    </div>
  );
}
