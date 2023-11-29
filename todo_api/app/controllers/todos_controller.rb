class TodosController < ApplicationController

  include CurrentUserConcern
  before_action :authenticate_user!
  before_action :set_todo_list, only: [:create]

  def index
    @todos = Todo.all
    render json: @todos
  end

  def create
    @todo = @todo_list.todos.new(todo_params)
    if @todo.save
      render json: @todo, status: :created
    else
      render json: @todo.errors, status: :unprocessable_entity
    end
  end

  def update
    @todo = Todo.find(params[:id])
    if @todo.update(todo_params)
      render json: @todo, status: :ok
    else
      render json: @todo.errors, status: :unprocessable_entity
    end
  end

  def set_todo_list
    @todo_list = TodoList.find(params[:todo_list_id])
  end

  def destroy
    Todo.find(params[:id]).destroy!
    head :no_content
  end

  private
  def authenticate_user!
    render json: { errors: ["Unauthorized"] }, status: :unauthorized unless @current_user?
  end

  def todo_params
    params.require(:todo).permit(:title, :completed)
  end
end
