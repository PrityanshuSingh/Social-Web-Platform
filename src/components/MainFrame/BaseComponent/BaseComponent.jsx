import FeedFrame from "../../Feed/FeedFrame/FeedFrame";
import CommunityFrame from "../../Community/CommunityFrame/CommunityFrame"; 
import Base from "./styles/BaseComponent.module.css";

function BaseComponent(path) {
  let ComponentToRender;

  switch (path.path) {
    case '/feed':
      ComponentToRender = <FeedFrame />;
      break;
    case '/community':
      ComponentToRender = <CommunityFrame />;
      break;
    default:
      ComponentToRender = <FeedFrame />;// or you can handle a not found component here
  }

  return (
    <div>
      <div className={Base.base}>
        {ComponentToRender}
      </div>
    </div>
  );
}

export default BaseComponent;
