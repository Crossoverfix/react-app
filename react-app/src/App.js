import './App.css';
import {Button} from "primereact/button";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import testCss from './css/test-component.scss';
import './css/main.scss'
import './css/local.scss';

function App() {
    const toggleTheme = () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    };
    const toggleLayer = () => {
        const currentLayer = document.documentElement.getAttribute('data-layer');
        if (currentLayer === 'layer1') {
            document.documentElement.setAttribute('data-layer', 'layer2');
        } else {
            document.documentElement.setAttribute('data-layer', 'layer1');
        }
    };

  return (
    <div className="App var">
        <div className="app-wrapp">
            <div className="app-header">
                <Button className="testBtn1" onClick={toggleTheme}>Theme</Button>
                <Button className="testBtn" onClick={toggleLayer}>Layer</Button>
            </div>
            <div className="app-body__container">
                <div className="app-body__colors color-1"></div>
                <div className="app-body__colors color-2"></div>
                <div className="app-body__colors color-3"></div>
                <div className="app-body__colors color-4"></div>
            </div>
            <div className={testCss.testA}>
                <div className={testCss}></div>
                <div className="test-component">
                    <div className="app-body__colors color-1"></div>
                    <div className="app-body__colors color-2 testA"></div>
                    <div className="app-body__colors color-3 testB"></div>
                    <div className="app-body__colors color-4"></div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
