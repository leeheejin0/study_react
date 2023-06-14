import React from "react";

import './MenuItem.css';

const MenuItem = () => {
    return (
        <div className="menuItem">
            <ul className="tblData">
                <li>메가반점</li>
                <li>중식</li>
                <li>
                    <ul className="tblMenu">
                        <li>짜장면(8,000원)</li>
                        <li>짜장면(8,000원)</li>
                        <li>짜장면(8,000원)</li>
                    </ul>
                </li>
            </ul>
            <ul className="tblData">
                <li>메가반점</li>
                <li>중식</li>
                <li>
                    <ul className="tblMenu">
                        <li>짜장면(8,000원)</li>
                        <li>짜장면(8,000원)</li>
                        <li>짜장면(8,000원)</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default MenuItem;