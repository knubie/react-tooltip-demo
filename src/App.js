import logo from './logo.svg';
import { Tooltip } from 'react-tooltip';
import './App.css';

function App() {
  return (
    <div className="App">
      <div
        data-tooltip-id="foobar"
        data-tooltip-content="foo"
        data-tooltip-place="right"
        className="sidebar-item"
      >
        foo
      </div>
      <div
        data-tooltip-id="foobar"
        data-tooltip-content="bar"
        data-tooltip-place="right"
        className="sidebar-item"
      >
        bar
      </div>
      <div
        data-tooltip-id="foobar"
        data-tooltip-content="bizz"
        data-tooltip-place="right"
        className="sidebar-item"
      >
        bizz
      </div>
      <Tooltip id="foobar" delayHide={0} className="tooltip"/>
    </div>
  );
}

export default App;
