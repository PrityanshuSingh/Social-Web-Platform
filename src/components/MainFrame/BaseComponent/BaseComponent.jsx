import FeedFrame from "../../Feed/FeedFrame/FeedFrame";
import Base from "./styles/BaseComponent.module.css"

function BaseComponent() {
  return (
    <div>
        <div className={Base.base}>
            {<FeedFrame />}  
        </div>  
    </div>
  )
}

export default BaseComponent;
