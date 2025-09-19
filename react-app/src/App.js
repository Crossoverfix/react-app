import './App.css';
import {Button} from "primereact/button";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import './css/main.scss'
import './css/local.scss';
import {useEffect, useState} from "react";
import TableWrapper from "./component/table/tableWrapp";

function App() {
    const [products, setProducts] = useState([]);
    const content = [
        {id: '001', name: 'admin', description:'test', comment: 'тест', btn: true},
        {id: '002', name: 'admin', description:'test', comment: 'тест', btn: true},
        {id: '003', name: 'admin', description:'test', comment: 'тест', btn: false},
        {id: '004', name: 'admin', description:'test', comment: 'тест', btn: true},
        {id: '005', name: 'admin', description:'test', comment: 'тест', btn: false},
        {id: '006', name: 'admin', description:'test', comment: 'тест', btn: true},
        {id: '007', name: 'admin', description:'test', comment: 'тест', btn: true},
        {id: '008', name: 'admin', description:'test', comment: 'тест', btn: false},
        {id: '009', name: 'admin', description:'test', comment: 'тест', btn: true},
        {id: '010', name: 'admin', description:'test', comment: 'тест', btn: false},
        {id: '011', name: 'admin', description:'test', comment: 'тест', btn: true},
        {id: '012', name: 'admin', description:'test', comment: 'тест', btn: true},
        {id: '013', name: 'admin', description:'test', comment: 'тест', btn: false},
        {id: '014', name: 'admin', description:'test', comment: 'тест', btn: true},
        {id: '015', name: 'admin', description:'test', comment: 'тест', btn: false},
        {id: '016', name: 'admin', description:'test', comment: 'тест', btn: true},
        {id: '017', name: 'admin', description:'test', comment: 'тест', btn: true},
        {id: '018', name: 'admin', description:'test', comment: 'тест', btn: false},
        {id: '019', name: 'admin', description:'test', comment: 'тест', btn: true},
        {id: '020', name: 'admin', description:'test', comment: 'тест', btn: false},

    ];

    useEffect(() => {
        setProducts(content);
    }, []);

    const toggleTheme = () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    };

    return (
        <div className="App var">
            <div className="app__wrapp">
                <div className="app__header">
                    <Button className="testBtn1" onClick={toggleTheme}>Theme</Button>
                </div>
                <div className="app__body">
                    <TableWrapper title="test" products={products}></TableWrapper>
                </div>
            </div>
        </div>
    );
}

export default App;
