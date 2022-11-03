import BookContent from "../components/BookContent";

const IndexedScreen = ({ route }) => {
  const initialPage = route.params.initialPage;
  return <BookContent initialPage={initialPage} />;
};

export default IndexedScreen;
