class TodosController < ApplicationController
  include CurrentUserConcern
  before_action :authenticate_user!
  before_action :set_todo_list, only: [:create, :update, :destroy]

  # Since we are using a nested route, there's no need to define an index action here
  # It is assumed that listing todos will be handled through the TodoListsController

  def create
    @todo = @todo_list.todos.new(todo_params)
    puts @todo
    if @todo.save
      render json: @todo, status: :created
    else
      render json: @todo.errors, status: :unprocessable_entity
    end
  end

  def update
    @todo = @todo_list.todos.find(params[:id])
    if @todo.update(todo_params)
      render json: @todo, status: :ok
    else
      render json: @todo.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @todo = @todo_list.todos.find(params[:id])
    @todo.destroy!
    head :no_content
  end



  def destroy
    Todo.find(params[:id]).destroy!
    head :no_content
  end

  private
  def authenticate_user!
    render json: { errors: ["Unauthorized"] }, status: :unauthorized unless @current_user
  end
  def set_todo_list
    @todo_list = @current_user.todo_lists.find(params[:todo_list_id])
  end

  def todo_params
    params.require(:todo).permit(:title, :completed)
  end
end
