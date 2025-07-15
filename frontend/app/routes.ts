import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/dashboard.tsx"),
  route("crisis-alert-flow/page1", "routes/crisis-alert-flow/page1.jsx"),
  route("crisis-alert-flow/page1b", "routes/crisis-alert-flow/page1b.jsx"),
  route("crisis-alert-flow/page2", "routes/crisis-alert-flow/page2.jsx"),
  route("crisis-alert-flow/page3", "routes/crisis-alert-flow/page3.jsx"),
  route("crisis-alert-flow/page4", "routes/crisis-alert-flow/page4.jsx"),
  route("crisis-alert-flow/page5", "routes/crisis-alert-flow/page5.jsx"),
] satisfies RouteConfig;
