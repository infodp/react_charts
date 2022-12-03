import SimpleBarCharts from "./components/SimpleBarCharts";
import SimplePieCharts from "./components/SimplePieCharts";
import StackedAreaCharts from "./components/StackedAreaCharts";

function App() {
  return (
    <div>
     <h1 className="text-center text-2xl leading-9 font-bold">ReCharts</h1>
     {/* <SimpleBarCharts /> */}
     {/* <StackedAreaCharts /> */}
     <SimplePieCharts />
    </div>
  );
}

export default App;
