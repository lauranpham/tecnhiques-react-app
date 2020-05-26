// Firstly, import Middleware from redux
import { createStore, combineReducers, applyMiddleware } from "redux";
// import { Reducer, initialState } from "./reducer";
import { createForms } from "react-redux-form";
import { Makeuplooks } from "./makeuplooks";
import { Comments } from "./comments";
import { Promotions } from "./promotions";
import { Employees } from "./employees";
// Second, import thunk from redux-thunk
import thunk from "redux-thunk";
import logger from "redux-logger";
import { InitialFeedback } from "./forms";
export const ConfigureStore = () => {
  // const store = createStore(Reducer, initialState);
  // createstore takes an enhancer as a second argument/parameter
  const store = createStore(
    combineReducers({
      makeuplooks: Makeuplooks,
      comments: Comments,
      promotions: Promotions,
      employees: Employees,
      // createForms - brings in own set of reducers
      ...createForms({
        // allows reset of form after submission
        feedback: InitialFeedback,
      }),
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
