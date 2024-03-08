import styles from "./css/Navigation.module.css";

function Navigation(){
  return (
    <div className={styles.navigationBar}>
      <img
        className={styles.navigationBarChild}
        alt=""
        src="/rectangle-13.svg"
      />
      <div className={styles.ellipseParent}>
        <div className={styles.ellipse}>
          <img
            className={styles.ellipseIcon}
            loading="eager"
            alt=""
            src="/ellipse@2x.png"
          />
        </div>
        <div className={styles.helloUsername}>
          <p className={styles.hello}>{`Hello `}</p>
          <p className={styles.username}>Username</p>
        </div>
      </div>
      <div className={styles.internship}>
        <div className={styles.book}>
          <div className={styles.feedFrame}>
            <img
              className={styles.compassIcon}
              loading="eager"
              alt=""
              src="/compass.svg"
            />
            <div className={styles.feed}>Feed</div>
          </div>
          <div className={styles.postImg}>
            <div className={styles.aestheticImages}>
              <img
                className={styles.communityIcon}
                loading="eager"
                alt=""
                src="/community.svg"
              />
              <div className={styles.community}>Community</div>
            </div>
          </div>
          <div className={styles.userDropdown}>
            <div className={styles.navbarContainer}>
              <img
                className={styles.inernshipIcon}
                loading="eager"
                alt=""
                src="/inernship.svg"
              />
              <div className={styles.internships}>Internships</div>
            </div>
          </div>
          <div className={styles.postFrame}>
            <img className={styles.bookIcon} alt="" src="/book.svg" />
            <div className={styles.resourcesText}>
              <div className={styles.resources}>Resources</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
