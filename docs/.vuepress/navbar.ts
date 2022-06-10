import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  { text: "高校介绍", icon: "study", link: "/introduction/" },
  { text: "港校特色", icon: "sitemap", link: "#" },
  { text: "咨询我们", icon: "wechat", link: "/contact/" },
  { text: "服务介绍", icon: "launch", link: "/service/" },
  { text: "关于我们", icon: "group", link: "/about/" },
]);
