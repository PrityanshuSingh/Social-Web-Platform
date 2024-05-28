import Feed from "../../../pages/Feed/Feed";
import Community from "../../../pages/Community/Community"; 
import Base from "./styles/BaseComponent.module.css";

function BaseComponent(path) {
  let ComponentToRender;

  switch (path.path) {
    case '/feed':
      ComponentToRender = <Feed />;
      break;
    case '/community':
      ComponentToRender = <Community />;
      break;
    default:
      ComponentToRender = <Feed />;// or you can handle a not found component here
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
