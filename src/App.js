import React, { Component } from 'react';

// Import widgets being used in this component
import NumberWidgetContainer from './components/NumberWidgetContainer';
import ListWidgetContainer from './components/ListWidgetContainer';
import GraphWidgetContainer from './components/GraphWidgetContainer';
import Widget from './components/Widget';

// Add in styles
import './styles/App.css';

class App extends Component {
    render() {
        return (
            <div>
                <h1 className="web-title">OFFICE DATABOARD</h1>
                <div className="App">
                    {/* Add Widgets to display */}
                    <ListWidgetContainer href="http://localhost:4000/stats/top" heading="Top Projects Hours" rowspan={3} />
                    <NumberWidgetContainer href="http://localhost:4000/tickets/open" heading="Projects Total" />
                    <GraphWidgetContainer href="http://localhost:4000/tickets/progression" heading="Project Hours Over Time" colspan={2} rowspan={2} />
                    <NumberWidgetContainer href="http://localhost:4000/tickets/today" heading="Open Projects Today" />
                    <NumberWidgetContainer href="http://localhost:4000/tickets/urgent" heading="Projects Marked 'Urgent'" />
                    <NumberWidgetContainer href="http://localhost:4000/stats/response" heading="Closed Projects %" />
                    <NumberWidgetContainer href="http://localhost:4000/stats/solved" heading="New Projects %" />
                </div>
            </div>
        );
    }
}

export default App;