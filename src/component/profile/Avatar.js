
import classes from './Avatar.module.css';

function Avatar() {
  return (
    <div className={classes.AvatarWrapper}>
      <div className={classes.Avatar}>T</div>
      <div className={classes.Info}>
          <h3>Teresa</h3>
          <span>last seen recently</span>
      </div>
    </div>
  );
}

export default Avatar;
