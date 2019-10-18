import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common'
import { TasksService } from './tasks.service'
import { Task } from './Task.model'
import { CreateTaskDto } from './dto/create-task.dto'

@Controller('tasks')
export class TasksController {
	constructor(private tasksService: TasksService) {}

	@Get()
	get(): Task[] {
		return this.tasksService.get()
	}

	@Get('/:id')
	getById(@Param('id') id: string): Task {
		return this.tasksService.getById(id)
	}

	@Post()
	create(@Body() createTaskDto: CreateTaskDto): Task {
		return this.tasksService.create(createTaskDto)
	}

	@Delete('/:id')
	delete(@Param('id') id: string): Task {
		return this.tasksService.delete(id)
	}
}
