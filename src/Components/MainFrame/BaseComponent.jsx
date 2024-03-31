import Feed from "../../Pages/Feed";
import Base from "./css/BaseComponent.module.css"

function BaseComponent() {
  return (
    <div>
        <div className={Base.base}>
            {<Feed />}  
        </div>  
    </div>
  )
}

export default BaseComponent;
