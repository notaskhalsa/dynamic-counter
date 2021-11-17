import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { count } from "console";

export default function Navbar(props: any): JSX.Element {
  const { totalCounters } = props;
  return (
    <nav className="navbar bg-light">
      <a href="/#" className="navbar-brand ps-4 fs-2">
        Navbar{" "}
        <span className="badge badge-pill bg-primary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
}
