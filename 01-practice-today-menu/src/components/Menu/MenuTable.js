import React from "react";

import MenuItem from "./MenuItem";
import './MenuTable.css';



const MenuTable = () => {
    return (
        <div className="menuTable">
            <ul className="tblHead">
                <li>식당 이름</li>
                <li>종류</li>
                <li>메뉴</li>
            </ul>
            <MenuItem />
        </div>
    );
};

export default MenuTable;