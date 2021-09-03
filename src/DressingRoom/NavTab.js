import React from 'react';
import { useSelector } from 'react-redux';

export default function NavTab(props) {
  const navPills = useSelector((state) => state.NavTabReducer.navPills);
  const renderNavTab = () => {
    return navPills.map((item, index) => {
      return (
        <li className="nav-item" key={index}>
          <a className="nav-link btn-default" data-toggle="pill" href={`#${item.tabName}`}>
            {item.showName}
          </a>
        </li>
      );
    });
  };
  return (
    <div>
      <ul className="nav nav-pills">{renderNavTab()}</ul>
    </div>
  );
}
