import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <div className="nav">
      <h1>Waves</h1>
      <button>
        Library <FontAwesomeIcon icon={faMusic} />
      </button>
    </div>
  );
};

export default Nav;
