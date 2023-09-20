import { useState } from "react";

import FundTable from "./FundTable";
import DynamicTable from "./DynamicTable";

import styles from "../styles/App.module.css"

import data from "../json/data.json"

function App( {year, month} ) {
    const [header, setHeader] = useState(`${month} ${year}`);
    const [dataDict, setDataDict] = useState(data[year][month]);
    const [dynamicDetail, setDynamicDetail] = useState("A");

    function Test(val){
        setDynamicDetail(val.nativeEvent.target.value);
    }

    return (
        <div className={`${styles.section}`}>
            <header className={`${styles.header}`}>
                <p className={`${styles.reactive_web}`}>
                    Rentabilidad real de los fondos de pensiones {header}
                </p>
                <p className={`${styles.reactive_mobile} ${styles.mobile_title}`}>
                    Fondos de Pensiones
                </p>
            </header>

            <div className={`${styles.container} ${styles.reactive_web}`}>
                {
                    Object.keys(dataDict).length > 0 && Object.keys(dataDict).map((key) =>
                        <FundTable name={key} data={dataDict[key]}/>
                    )
                }
            </div>

            <div className={`${styles.mobile_container} ${styles.reactive_mobile}`}>
                <div className={`${styles.lead}`}>
                    <p className={`${styles.lead_title}`}>
                        Rentabilidad Real
                    </p>
                    <hr className={`${styles.lead_dash}`}></hr>
                    <div className={`${styles.lead_footer}`}>
                        <p className={`${styles.lead_header}`}>
                            {header}
                        </p>
                        <select className={`${styles.select}`} onChange={(e) => Test(e)}>
                            <option value="A">Fondo A</option>
                            <option value="B">Fondo B</option>
                            <option value="C">Fondo C</option>
                            <option value="D">Fondo D</option>
                            <option value="E">Fondo E</option>
                        </select>
                    </div>
                </div>
                {
                    <DynamicTable data={dataDict[dynamicDetail]}/>
                }
            </div>
        </div>
    )
}

export default App;