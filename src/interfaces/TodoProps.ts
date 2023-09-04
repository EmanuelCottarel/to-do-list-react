export interface TodoProps {
    id: string
    name: string,
    completed: boolean,
    toggleTaskCompleted: (id: string) => void,
    deleteTask: (id: string) => void,
    editTask: (id: string, newName: string) => void
}