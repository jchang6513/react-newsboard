import React from "react";

export interface StateProps {
  country: string;
  category: string;
}

type HeaderProps = StateProps;

const Header = (props: HeaderProps) => {
  const { category, country } = props;
  return (
    <div className="header">
      <img src="https://newsapi.org/favicon-32x32.png"></img>
      <h3>{`${category.toUpperCase()} IN ${country}`}</h3>
    </div>
  );
}

export default Header;
