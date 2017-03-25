export const DAY_VIEW = 'DAY_VIEW';
export const MONTH_VIEW = 'MONTH_VIEW';
export const TASK_CREATE = 'TASK_CREATE';

export function dayView(day) {
  return {
    type: DAY_VIEW,
    payload: day
  }
}
export function monthView(month) {
  return {
    type: MONTH_VIEW,
    payload: month
  }
}
export function taskCreate(task) {
  return {
    type: TASK_CREATE,
    payload: task
  }
}