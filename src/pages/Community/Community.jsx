import CommunityChannel from "../../components/Community/CommunityChannel/CommunityChannel";
import Community from "./styles/Community.module.css";

function CommunityFrame() {
    return (
      <>
      <div className={Community.communityContainer}>
        <div className={Community.communityTitle}>Community</div>
        <CommunityChannel />
      </div>
    </> 
    );
  }
  
  export default CommunityFrame;
  