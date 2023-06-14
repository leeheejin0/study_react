import React from "react";

import './Filter.css';

const Filter = () => {
    return (
        <div>
            <ul className="filter">
                <li>
                    <button>전체</button>
                </li>
                <li>
                    <button>중식</button>
                </li>
                <li>
                    <button>한식</button>
                </li>
                <li>
                    <button>일식</button>
                </li>
            </ul>
        </div>
    );
};

export default Filter;