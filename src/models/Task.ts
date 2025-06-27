interface TaskAttributes {
  id: number;
  title: string;
  description: string;
  status: "to-do" | "in-progress" | "done";
  priority: "low" | "medium" | "high";
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
    this.createdAt = attributes.createdAt;
    this.updatedAt = attributes.updatedAt;
  }

  
  }


