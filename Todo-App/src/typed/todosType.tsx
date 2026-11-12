export interface TodoTypes {
  id: number;
  text: string;
  completed: boolean;
  priority: "High" | "Low" | "Medium";
  date: string;
  currentDate: string;
}
export type TodoInitialState = {
  todos: TodoTypes[];
  editinId: number | null;
};
export interface EditTypes {
  id: number;
  text: string;
  priority: "High" | "Low" | "Medium";
  date: string;
}
