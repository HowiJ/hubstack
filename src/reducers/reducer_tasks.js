import { TASK_CREATE } from '../actions/index';
import taskManager from '../assets/seed';


const tasks = taskManager.index();

export default function (state = tasks, action) {
  switch(action.type) {
    case TASK_CREATE:
      return [action.payload, ...state];
    default:
      return state;
  }
}