import "./Button.scss";

type ButtonProps = {
  clickEvent: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ clickEvent }: ButtonProps) => (
  <button className={`Button`} onClick={clickEvent}>
    X
  </button>
);

export default Button;
