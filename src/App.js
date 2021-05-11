import logo from './logo.svg';
import './App.css';
import Widget from './components/Widget';
import ListWidgetContainer from './components/ListWidgetContainer';
import NumberWidgetContainer from './components/NumberWidgetContainer';

function App() {
  return (
    <div>
      <h2>Welcome to databoard</h2>
      <Widget/>
      <ListWidgetContainer href="http://localhost:4000/stats/top" heading="Top Ticket Answerers" rowspan={3} />
      <NumberWidgetContainer href="http://localhost:4000/tickets/open" heading="Open Ticket Total" />
    </div>
  );
}

export default App;
