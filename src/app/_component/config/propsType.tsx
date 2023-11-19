import { DateAdapter } from "chart.js"

type TaskCardProps ={
  task_id:number,
  task_name:string,
  task_detail:string,
  task_point:number,
  task_from:string|Date,
  task_due:string|Date,
  task_priority:number,
  task_tag_id:string,
  task_end:string|Date,
  task_user_id:string,
}

type TaskTagProps = {
  task_tag_id:string,
  task_tag_name:string
}

type CompileTaskProps = {
  task_name:string,
  task_point:number,
  task_from:string|Date,
  task_due:string|Date, 
  task_end:string|Date,
  task_priority:number,
  task_tag_id:string,
  task_user_id:string,
}

export type {
  TaskCardProps,
  TaskTagProps,
  CompileTaskProps
}