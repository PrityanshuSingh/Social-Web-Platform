import styles from "./css/RightSidebar.module.css";


function RightSidebar() {
    return (
    <div className={styles.rightSidebar}>
      <div className={styles.eventsFrame}>
        <div className={styles.events}>Events</div>
      </div>
      <div className={styles.eventcard}>
        <div className={styles.eventcard1}>
          <div className={styles.eventcard1Child} />
          <div className={styles.rectangle}>
            <div className={styles.eventInfoFrame} />
            <img className={styles.postFrame} alt="" src="/post--frame-4.svg" />
          </div>
          <div className={styles.postImg}>
            <div className={styles.postView} />
            <div className={styles.aestheticImages1} />
            <img
              className={styles.image12Icon}
              loading="eager"
              alt=""
              src="/image-12-2@2x.png"
            />
          </div>
          <div className={styles.textFrame}>
            <div className={styles.kivera}>Kivera</div>
          </div>
          <div className={styles.orgText}>
            <div className={styles.org}>Org.</div>
          </div>
          <div className={styles.loremIpsumDolorSitAmetCoWrapper}>
            <div
              className={styles.loremIpsumDolor}
            >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor `}</div>
          </div>
          <div className={styles.dateContainer}>
            <div className={styles.date20Jan}>Date: 20 Jan ’24</div>
          </div>
        </div>
        <img
          className={styles.scrollbarIcon}
          loading="eager"
          alt=""
          src="/scrollbar.svg"
        />
      </div>
    </div>
    );
  };
  
  export default RightSidebar;
  