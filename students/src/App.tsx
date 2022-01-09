import './App.css';
const students = require.context(`../../_data`, true, /\.json$/);

function App() {
  console.log(students.keys());
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
