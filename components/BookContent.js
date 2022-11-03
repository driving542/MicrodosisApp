import { View, FlatList, StyleSheet, Dimensions } from "react-native";
import { POEMS } from "../shared/POEMS";
import PoemPageDisplay from "./PoemPageDisplay";
import TitlePageDisplay from "./TitlePageDisplay";
import { useRef, useState, useEffect } from "react";
import IndexPage from "./IndexPage";

const BookContent = ({ initialPage }) => {
  const ref = useRef(null);
  const { width: windowWidth } = Dimensions.get("window");
  const [index, setIndex] = useState(initialPage);

  //When index changes: we get the Ref + scroll to certain index
  useEffect(() => {
    ref.current?.scrollToIndex({
      index,
      animated: false,
    });
  }, [index]);

  const renderItem = ({ item }) => {
    if (item.page === 1) {
      return <IndexPage setIndex={setIndex} />;
    } else if (item.esTitulo) {
      return <TitlePageDisplay item={item} />;
    } else {
      return <PoemPageDisplay item={item} />;
    }
  };

  return (
    <View style={styles.view}>
      <FlatList
        pagingEnabled
        horizontal
        disableIntervalMomentum
        snapToAlignment="start"
        data={POEMS}
        renderItem={renderItem}
        keyExtractor={(item) => item.page}
        style={styles.flatListContainer}
        ref={ref}
        initialNumToRender={12}
        initialScrollIndex={index}
        showsHorizontalScrollIndicator
        getItemLayout={(POEMS, index) => ({
          length: windowWidth,
          offset: windowWidth * index,
          index,
        })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: "#FAFAFA",
    flex: 1,
    width: Dimensions.get("window").width,
    display: "flex",
    flexDirection: "column",
    height: Dimensions.get("screen").length,
  },
  flatListContainer: {
    marginVertical: 0,
    width: Dimensions.get("window").width,
    height: Dimensions.get("screen").length,
    flex: 0.8,
  },
});

export default BookContent;
