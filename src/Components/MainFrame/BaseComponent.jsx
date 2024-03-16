// import Feed from "../../Pages/Feed";
import Base from "./css/BaseComponent.module.css"

function BaseComponent() {
  return (
    <div>
        <div className={Base.base}>
            <div className={Base.rectangle}>
            {/*<Feed />*/}
            <div className={Base.baseTitle}>Base</div>
            </div>     
        </div>  
    </div>
  )
}

export default BaseComponent;
