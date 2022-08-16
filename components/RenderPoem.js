import PoemCardScreen from "../screens/PoemCardScreen";

const RenderPoem = (props) => {
  console.log(props.title);
  return <PoemCardScreen title={props.title} />;
};
export default RenderPoem;
