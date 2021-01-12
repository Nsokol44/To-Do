export interface TodoItem {
  id: string;
  name: string;
  hashtags: string[];
  startTime: Date;
  endTime: Date;
  dueDate: Date;
  timeSpent: string;
  description: string;
  repeatable: number;
}
