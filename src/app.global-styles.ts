import { injectGlobal } from "@emotion/css";

/* eslint-disable @typescript-eslint/no-unused-expressions */
injectGlobal`
 :root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
  font-family: "Roboto", sans-serif;
  background-color: #f9f9f9;
}

body {
  min-width: 320px;
  min-height: 100vh;
}
`;
