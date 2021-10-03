import classes from './Information.module.css';
import { FiPhone, FiBell, FiUser } from "react-icons/fi";

function Information() {
    return (
        <div className={classes.InforList}>
            <div className={classes.InforItem}>
                <div className={classes.Icon}><FiPhone/></div>
                <div className={classes.Des}>
                    <span>+84 879 026 725</span>
                    <span className={classes.SubTitle}>Phone</span>
                </div>
            </div>
            <div className={classes.InforItem}>
                <div className={classes.Icon}><FiUser/></div>
                <div className={classes.Des}>
                    <span>TeresaLee</span>
                    <span className={classes.SubTitle}>Username</span>
                </div>
            </div>
            <div className={classes.InforItem}>
                <div className={classes.Icon}><FiBell/></div>
                <div className={classes.Des}>
                    <span>Notification</span>
                </div>
                <div className={classes.OnOffNoti}>
                    <label className={classes.switch}>
                        <input type="checkbox" />
                        <span className={`${classes.slider} ${classes.round}`}></span>
                    </label>
                </div>
            </div>
        </div>
    );
  }
  
  export default Information;