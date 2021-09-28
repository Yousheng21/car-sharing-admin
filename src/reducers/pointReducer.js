const SET_POINTS = "SET_POINTS";
const SET_NEW_POINTS = "SET_NEW_POINTS";
const SET_POINT_ID = "SET_POINT_ID";
const SET_CITIES = "SET_CITIES";

const defaultState = {
  points: [],
  newPoints: [],
  pointId: "",
  cities: [],
};

export default function pointReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_POINTS:
      return {
        ...state,
        points: action.points,
        newPoints: action.points,
      };
    case SET_NEW_POINTS:
      return {
        ...state,
        newPoints: action.points,
      };
    case SET_POINT_ID:
      return {
        ...state,
        pointId: action.id,
      };
    case SET_CITIES:
      return {
        ...state,
        cities: action.cities,
      };
    default:
      return state;
  }
}

export const setPoints = (points) => ({
  type: SET_POINTS,
  points,
});

export const setNewPoints = (points) => ({
  type: SET_NEW_POINTS,
  points,
});

export const setPointId = (id) => ({
  type: SET_POINT_ID,
  id,
});

export const setCities = (cities) => ({
  type: SET_CITIES,
  cities,
});
