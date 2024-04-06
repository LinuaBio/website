import styles from './headBar.module.scss'

function HeadBar() {
  return (
    <div className={styles.Container}>
      <div className={styles.leftItem}>
        <a href='https://neurocylcq.cn'>
          <img src='/logo.svg' className={styles.logo}></img>
        </a>
      </div>
      <div className={styles.rightItem}>
        
      </div>
    </div>
  )
}

export default HeadBar
