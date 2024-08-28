import {useDispatch, useSelector} from "react-redux";
import {StoreState} from "../../state/types";
import {actions} from "../../state/actions";

export const LeftSidebar = () => {
  const dispatch = useDispatch();
  const init = useSelector((state : StoreState) => state.init);

  return (<div>
    {
      init
        ? (<h1>Initialized</h1>)
        : (<button onClick={() => dispatch(actions.init(true))}>INITIALIZE</button>)
    }
  </div>);
};
