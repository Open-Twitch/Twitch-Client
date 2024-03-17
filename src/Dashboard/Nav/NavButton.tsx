/* eslint-disable @typescript-eslint/no-explicit-any */
export const NavButton = ({
    text,
    onClickHandler,
  }: {
    text: string;
    onClickHandler?: any;
  }) => {
    return (
      <span className="nav-button" onClick={onClickHandler}>
        {text}
      </span>
    );
  };