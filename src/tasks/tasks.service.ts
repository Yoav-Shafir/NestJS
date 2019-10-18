import { Injectable } from '@nestjs/common'
import { Task, TaskStatus } from './Task.model'
import * as uuid from 'uuid/v1'
import { CreateTaskDto } from './dto/create-task.dto'

@Injectable()
export class TasksService {
	private tasks: Task[] = []

	get(): Task[] {
		return this.tasks
	}

	getById(id: string): Task {
		return this.tasks.find(task => task.id === id)
	}

	create({ title, description }: CreateTaskDto): Task {
		const task: Task = {
			id: uuid(),
			title,
			description,
			status: TaskStatus.OPEN,
		}
		this.tasks.push(task)
		return task
	}

	delete(id: string): Task {
		const idx = this.tasks.findIndex(task => task.id === id)
		return this.tasks.splice(idx, 1).pop()
	}
}
