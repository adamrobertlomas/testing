import React from "react";

type IProps = {
  text: string;
};

const HeaderOne = (props: IProps) => {
  return (
    <>
      <h1 data-testid="h1Text">{props.text}</h1>
    </>
  );
};

export default HeaderOne;
