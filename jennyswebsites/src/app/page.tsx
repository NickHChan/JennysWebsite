import styles from './page.module.css'
import Navbar from './components/FirstTemplate/Navbar/Navbar';
import Firstbody from "./components/FirstTemplate/FirstBody/Firstbody";
import Secondbody from "./components/FirstTemplate/SecondBody/Secondbody";
import Thirdbody from './components/FirstTemplate/ThirdBody/Thirdbody';
import Fourthbody from './components/FirstTemplate/FourthBody/Fourthbody';


export default function Home() {
  return(
    <div className={styles.mainpageContainer}>
    <Navbar/>
    <Firstbody/>
    <Secondbody/>
    <Thirdbody/>
    <Fourthbody/>
    </div>
  )
}
