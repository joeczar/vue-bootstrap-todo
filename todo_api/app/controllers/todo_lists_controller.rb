class TodoListsController < ApplicationController
  include CurrentUserConcern
  before_action :authenticate_user!

  def index
    @todo_lists = TodoList.all
    render json: @todo_lists
  end

  def create
    @todo_list = @current_user.todo_lists.new(todo_list_params)
    if @todo_list.save
      render json: @todo_list, status: :created
    else
      render json: @todo_list.errors, status: :unprocessable_entity
    end
  end

  def update
    @todo_list = TodoList.find(params[:id])
    if @todo_list.update(todo_list_params)
      render json: @todo_list, status: :ok
    else
      render json: @todo_list.errors, status: :unprocessable_entity
    end
  end

  def destroy
    TodoList.find(params[:id]).destroy!
    head :no_content
  end

  private

  def authenticate_user!
    render json: { errors: ["Unauthorized"] }, status: :unauthorized unless @current_user
  end

  def todo_list_params
    params.require(:todo_list).permit(:title, :description, :user_id)
  end
end
