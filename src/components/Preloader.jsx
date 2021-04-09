import React from "react";
import { Spin } from "antd";
import "antd/dist/antd.css";
import s from "./Spin.module.css";

export const Preloader = () => {
  return (
    <div className={s.spin}>
      <Spin size="large" />
    </div>
  );
};
