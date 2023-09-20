import FundDetail from "./FundDetail";

import styles from "../styles/FundTable.module.css"

function FundTable( {name, data} ) {
    return (
        <div className={`${styles.set}`}>
            <div className={`${styles.container}`}>
                <p className={`${styles.header}`}>
                    Fondo {name}
                </p>
                <div className={`${styles.inner_container}`}>
                    {
                        Object.keys(data).length > 0 && Object.keys(data).map((key) =>
                            <FundDetail name={key} value={data[key]} />
                        )
                    }
                </div>
            </div>
            <div className={`${styles.shade}`}></div>
        </div>
    )
}

export default FundTable;