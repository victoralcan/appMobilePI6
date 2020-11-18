import { FAILURE, REQUEST, SUCCESS } from "./action-type.util";
import axios from 'axios';
import IAnnouncement from "../models/announcement.model";

export const ACTION_TYPES = {
  FETCH_ANNOUNCEMENTS: 'announcement/FETCH_ANNOUNCEMENTS',
  RESET: 'announcement/RESET'
};

const initialState = {
  announcements: [] as ReadonlyArray<IAnnouncement>,
  errorMessage: null,
  fetchSuccess: false
};

export type AnnouncementReducerState = Readonly<typeof initialState>;

// Reducer

export default (state: AnnouncementReducerState = initialState, action): AnnouncementReducerState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_ANNOUNCEMENTS):
      return {
        ...state,
        fetchSuccess: false
      };
    case SUCCESS(ACTION_TYPES.FETCH_ANNOUNCEMENTS):
      return {
        ...state,
        announcements: action.payload.data.announcements,
        fetchSuccess: true
      };
    case FAILURE(ACTION_TYPES.FETCH_ANNOUNCEMENTS):
      return {
        ...state,
        errorMessage: action.payload,
        fetchSuccess: false
      };
    case ACTION_TYPES.RESET:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

// Actions

export const fetchAnnouncements = (token: string, courseId: string) => async (dispatch, _) => {
  const requestUrl = `https://classroom.googleapis.com/v1/courses/${courseId}/announcements`;
  const result = await dispatch({
    type: ACTION_TYPES.FETCH_ANNOUNCEMENTS,
    payload: axios.get(requestUrl, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  });
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
