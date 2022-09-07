import colors from "./data/colors.json";
import Colors from "./Components/Colors";

function App() {
  var keys = Object.keys(colors);
  return (
    <div className="container">
      {keys.map((key) => {
        return <Colors key={key} shade={key} />;
      })}
    </div>
  );
}

export default App;
