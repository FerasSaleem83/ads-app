// import { useEffect } from "react";

// function App() {
//   useEffect(() => {
//     const gptScript = document.createElement("script");
//     gptScript.async = true;
//     gptScript.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
//     document.head.appendChild(gptScript);

//     gptScript.onload = () => {
//       window.googletag = window.googletag || { cmd: [] };
//       window.googletag.cmd.push(function () {
//         window.googletag
//           .defineSlot(
//             "/44100265/Royanews_AP_300x600_300x250",
//             [[300, 250], [300, 600]],
//             "div-gpt-ad-1729510663829-0"
//           )
//           .addService(window.googletag.pubads());
//         window.googletag.pubads().enableSingleRequest();
//         window.googletag.enableServices();
//         window.googletag.display("div-gpt-ad-1729510663829-0");
//       });
//     };
//   }, []);

//   return (
//     <div
//       id="div-gpt-ad-1729510663829-0"
//       style={{ minWidth: "300px", minHeight: "250px" }}
//     ></div>
//   );
// }

// export default App;



import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to React</h1>
        <p>Edit <code>src/App.js</code> and save to reload.</p>
      </header>
    </div>
  );
}

export default App;
