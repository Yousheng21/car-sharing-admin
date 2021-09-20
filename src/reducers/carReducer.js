const SET_MODELS = "SET_MODELS";
const SET_NEW_MODELS = "SET_NEW_MODELS";
const SET_CATEGORIES = "SET_CATEGORIES";

const defaultState = {
  models: [],
  newModels: [],
  categories: [],
};

export default function carReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_MODELS:
      return {
        ...state,
        models: action.models,
        newModels: action.models,
      };
    case SET_NEW_MODELS:
      return {
        ...state,
        newModels: action.models,
      };
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
      };
    default:
      return state;
  }
}

export const setModels = (models) => ({
  type: SET_MODELS,
  models,
});

export const setNewModels = (models) => ({
  type: SET_NEW_MODELS,
  models,
});

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  categories,
});
