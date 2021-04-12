import React from "react";
import { Spin } from "antd";
import "antd/dist/antd.css";
import s from "./Preloader.module.css";

export const Preloader = () => {
  return (
    <div className={s.spin}>
      <Spin size="large" />
      <div className={s.dude}>Please wait, Dude...</div>
    </div>
  );
};
