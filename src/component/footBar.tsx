import styles from './footBar.module.scss'

function FootBar() {
  return (
    <div className={styles.Container}>
      <div className={styles.content}>
        <div className={styles.Copyright}>Copyright © 2024 Neurocylcq</div>
      </div>
    </div>
  )
}

export default FootBar
