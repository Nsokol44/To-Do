export interface BringItem {
    id: string,
    name: string,
    hashtags: string[],
    startTime: Date,
    endTime: Date,
    dueDate: Date,
    timeSpent: string,
    description: string,
    repeatable: number
}
