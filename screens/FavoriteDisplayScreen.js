import PoemPageDisplay from "../components/PoemPageDisplay";

const FavoriteDisplayScreen = ({ route }) => {
  const favPoem = route.params.poem;
  return <PoemPageDisplay item={favPoem} />;
};

export default FavoriteDisplayScreen;
