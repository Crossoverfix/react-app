import './App.css';
import {Button} from "primereact/button";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import testComponent from './css/test-component.scss';
import './css/var.scss'

function App() {

  return (
    <div className="App">
        <div className="app-wrapp">
            <div className="app-header">
                <Button>Test</Button>
            </div>
            <div className={testComponent.testComponent}>
                <div className={testComponent.testComponent}></div>
                <div className="test-component">
                    <div className="app-body__colors color-1"></div>
                    <div className="app-body__colors color-2"></div>
                    <div className="app-body__colors color-3"></div>
                    <div className="app-body__colors color-4"></div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
