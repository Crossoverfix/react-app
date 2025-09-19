import {Column} from "primereact/column";
import {DataTable} from "primereact/datatable";
import './table.scss'
import {Button} from "primereact/button";

function TableWrapper(props) {
    const btn = (btn) => {
        if (btn.btn) {
            return (
                <Button>Test</Button>
            );
        } else {
            return (
                <Button disabled={true}>Test</Button>
            );
        }
    }
    return (
        <div className="pr-table">
            <div className="pr-table__header">
                <span className="pr-table__header__title">{props.title}</span>
                <div className="pr-table__header__toolbar"></div>
            </div>
            <div className="pr-table__body">
                <DataTable size="small" editingRows="row" value={props.products} tableStyle={{ minWidth: '100px' }} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} scrollable scrollHeight="60vh">
                    <Column field="id" header="ID" sortable></Column>
                    <Column field="name" header="Имя"></Column>
                    <Column field="description" header="Описание"></Column>
                    <Column field="comment" header="Коментарии"></Column>
                    <Column field="btn" body={btn}></Column>
                </DataTable>
            </div>
        </div>
    )
}
export default TableWrapper;
