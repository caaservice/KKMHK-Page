import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "千里梦HK",
  description: "2022年香港高校本科生高考批招生咨询服务",

  base: "/",

  theme,
});
