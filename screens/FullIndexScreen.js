import FullIndex from "./FullIndex";
import { POEMS } from "../shared/POEMS";

const FullIndexScreen = ({ navigation }) => {
  return <FullIndex poem={POEMS} />;
};

export default FullIndexScreen;
