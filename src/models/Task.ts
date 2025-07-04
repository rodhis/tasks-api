interface TaskAttributes {
  id: number;
  title: string;
  description: string;
  status: "to-do" | "in-progress" | "done";
  priority: "low" | "medium" | "high";
  ownerId: number;
  createdAt: Date;
  updatedAt: Date;
}

export class Task {
    private static tasks: Task[] = [];
    private static sequence: number = 1;
    id: number;
    title: string;
    description: string;
    status: "to-do" | "in-progress" | "done";
    priority: "low" | "medium" | "high";
    ownerId: number;
    createdAt: Date;
    updatedAt: Date;

   constructor(
    attributes: TaskAttributes
  ) {
    this.id = attributes.id;
    this.title = attributes.title;
    this.description = attributes.description;
    this.status = attributes.status;
    this.priority = attributes.priority;
    this.ownerId = attributes.ownerId;
    this.createdAt = attributes.createdAt;
    this.updatedAt = attributes.updatedAt;
  }

    static findAll(): Task[] {
      return [...this.tasks];
    }

    static findById(id: number): Task | null {
      return this.tasks.find(task => task.id === id) ?? null;
    }

    static create(attrs: Omit<TaskAttributes, 'id' | 'createdAt' | 'updatedAt'>): Task {
      const newTask = new Task({
        ...attrs,
        id: this.sequence++,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      this.tasks.push(newTask);
      return newTask;
    }
    
    static update(id: number, attrs: Partial<Omit<TaskAttributes, 'id' | 'createdAt'>>): Task | null {
      const task = this.findById(id);
      if (!task) return null;
      Object.assign(task, attrs, { updatedAt: new Date() });
      return task;
    }

    static delete(id: number): Task | null {
      const index = this.tasks.findIndex(task => task.id === id);
      if (index === -1) return null;
      const [deletedTask] = this.tasks.splice(index, 1);
      return deletedTask;
    }
}