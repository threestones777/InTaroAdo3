import { useEffect } from "react";
import WOW from "wow.js";
import "animate.css";

import Home from "./pages/Home";

export default function App() {
  if (!localStorage.getItem("lang")) {
    // 设置默认语言
    localStorage.setItem("lang", "cn"); // 例如默认英文
  }
  useEffect(() => {
    new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: true,
      live: true,
      // callback: function (box) {
      //   console.log("WOW: animating <" + box.tagName.toLowerCase() + ">");
      // },
    }).init();
  });
  return (
    <div className="app min-w-page">
      <Home />
    </div>
  );
}
