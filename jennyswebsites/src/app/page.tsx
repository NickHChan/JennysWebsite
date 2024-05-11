import styles from './page.module.css'
import Firstbody from "./components/FirstBody/Firstbody";
import Secondbody from "./components/SecondBody/Secondbody";

export default function Home() {
  return(
    <div className={styles.mainpageContainer}>
    <Firstbody/>
    <Secondbody/>
    </div>
  )
}
