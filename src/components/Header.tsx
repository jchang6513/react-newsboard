import React from "react";
import withHeaderState, { HeaderMapProps } from '../hoc/withHeaderState';
import newsApi from '../assets/images/newsApi.png';

type HeaderProps = HeaderMapProps;

const Header = (props: HeaderProps) => {
  const { category, country } = props;
  return (
    <div className="header">
      <img src={newsApi}></img>
      <h3>{`${category.toUpperCase()} IN ${country}`}</h3>
    </div>
  );
}

export default withHeaderState(Header);
