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
    case '/feed/results':
      ComponentToRender = <Feed />;
      break;
    case '/community/results':
      ComponentToRender = <Community />;
      break;
    case '/feed/results?search_query=:tagname':
      ComponentToRender = <Feed />;
      break;
    case '/community/results?search_query=:tagname':
      ComponentToRender = <Community />;
      break;
    default:
      ComponentToRender = <div><h1>Page not Found</h1></div>;// or you can handle a not found component here
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
