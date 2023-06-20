import logo from './logo.svg';
import { useState } from 'react';
import { Tooltip } from 'react-tooltip';
import './App.css';

function App() {
  const [showFirst, setShowFirst] = useState(true)
  const [showSecond, setShowSecond] = useState(true)
  const [showThird, setShowThird] = useState(true)
  return (
    <div className="App">
      { showFirst &&
          <div
            data-tooltip-id="foobar"
            data-tooltip-content="foo"
            data-tooltip-place="right"
            className="sidebar-item"
            onClick={() => setShowFirst(false)}
          >
            foo
          </div>
      }
      { !showFirst &&
          <div
            className="sidebar-item-hidden"
          >
          </div>
      }
      { showSecond &&
          <div
            data-tooltip-id="foobar"
            data-tooltip-content="bar"
            data-tooltip-place="right"
            className="sidebar-item"
            onClick={() => setShowSecond(false)}
          >
            bar
          </div>
      }
      { !showSecond &&
          <div
            className="sidebar-item-hidden"
          >
          </div>
      }
      { showThird &&
          <div
            data-tooltip-id="foobar"
            data-tooltip-content="bizz"
            data-tooltip-place="right"
            className="sidebar-item"
            onClick={() => setShowThird(false)}
          >
            bizz
          </div>
      }
      { !showThird &&
          <div
            className="sidebar-item-hidden"
          >
          </div>
      }
      <Tooltip id="foobar" delayShow={300} delayHide={0} className="tooltip"/>
    </div>
  );
}


export default App;
