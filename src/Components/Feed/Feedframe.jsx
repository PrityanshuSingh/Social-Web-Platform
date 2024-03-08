import styles from "./css/Feedframe.module.css";

function Feedframe() {
    return (
      <div className={styles.feedFrame}>
        <img className={styles.feedFrameChild} alt="" src="/rectangle-13.svg" />
        <div className={styles.feed}>Feed</div>
        <div className={styles.frameParent}>
          <div className={styles.unitPostExample1Parent}>

            <img
              className={styles.scrollbarIcon}
              loading="eager"
              alt=""
              src="/scrollbar.svg"
            />
          </div>
        
        </div>
      </div>
    );
  };
  
  export default Feedframe;
  