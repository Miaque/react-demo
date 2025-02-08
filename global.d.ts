interface Task {
    id: number;
    text: string;
    done: boolean;
}

interface TaskAction {
    type: string;
    id: number;
    text: string;
    task: { id: number; };
}
