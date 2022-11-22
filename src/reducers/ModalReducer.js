import { ModalTypes } from "./../actiontypes/ModalTypes";

export const ModalReducer = (state, action) => {
  switch (action.type) {
    case ModalTypes.modifyVisualization:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
