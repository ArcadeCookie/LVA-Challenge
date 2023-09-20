import styles from "../styles/FundDetail.module.css"

function FundDetail( {name, value} ) {

    const val = parseInt(value * 100)
    const obj = {
        width: `${val}%`,
    }
    const bar_progress = <div style={obj} className={`${styles.bar_fill}`}></div>

    return (
        <div className={`${styles.container}`}>
            <p className={`${styles.name}`}>
                {name}
            </p>
            <div className={`${styles.bar_background}`}>
                {bar_progress}
            </div>
            <p className={`${styles.value}`}>
                {value}
            </p>
        </div>
    )
}

export default FundDetail;