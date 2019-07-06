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
      <h3>{`${category} in ${country}`}</h3>
    </div>
  );
}

export default Header;
