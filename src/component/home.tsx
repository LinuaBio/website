import Logo from '/icon.png'
import styles from './home.module.scss'
import bgImage from '/headImg0.jpg'

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.headScreen} style={{backgroundImage: `url(${bgImage})`}}>
        <div className={styles.info}>
          <div className={styles.infoHead}>
            <img src={Logo} alt="Logo" className={styles.logo} />
            <h1 className={styles.title}>Neurocylcq</h1>
          </div>
          <div className={styles.infoContent}>This neurocylcq's website</div>
        </div>
      </div>
      <div className={styles.content}>
        <p>This is the content area.</p>  
        <p>More content...</p>
      </div>
    </div>
  )
}

export default App