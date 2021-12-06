import "./Button.css";
const styles = {
  button: {
    backgroundColor: "blue",
    color: "#fff",
  },
};
function Button({ name }) {
  // console.log(props);
  return <button className="btn btn-primary text-white">{name}</button>;
}
export default Button;
