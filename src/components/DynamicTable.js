import FundDetail from "./FundDetail";

import styles from "../styles/DynamicTable.module.css"

function DynamicTable( {data} ) {
    return (
        <div id="dynamic_table" className={`${styles.container}`}>
            {
                Object.keys(data).length > 0 && Object.keys(data).map((key) =>
                    <FundDetail name={key} value={data[key]}/>
                )
            }
        </div>
    )
}

export default DynamicTable;