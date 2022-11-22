import { TagTypes } from "./../actiontypes/TagReducerTypes";
export const TagReducer = (state, action) => {
  switch (action.type) {
    case TagTypes.contentUpdated:
      return {
        ...state,
        triggeredAction: action.payload,
      };

    default:
      return state;
  }
};
