import NewFull from "../components/NewFull";

const IndexedScreen = ({ route, navigation }) => {
  const initialPage = route.params.initialPage;
  return <NewFull initialPage={initialPage} />;
};

export default IndexedScreen;
