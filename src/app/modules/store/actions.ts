import { createAction, props } from '@ngrx/store';

export const addTodo = createAction('[Todo] Add Todo', props<{ title: string }>());
export const toggleTodo = createAction('[Todo] Toggle Todo', props<{ id: number }>());
export const removeTodo = createAction('[Todo] Remove Todo', props<{ id: number }>());
