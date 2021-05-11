import logo from './logo.svg';
import './App.css';
import Widget from './components/Widget';
import NumberWidgetContainer from './components/NumberWidgetContainer';

function App() {
  return (
    <div>
      <h2>Welcome to databoard</h2>
      <Widget/>
      <NumberWidgetContainer href="http://localhost:3001/tickets/open" heading="Open Ticket Total" />
    </div>
  );
}

export default App;
