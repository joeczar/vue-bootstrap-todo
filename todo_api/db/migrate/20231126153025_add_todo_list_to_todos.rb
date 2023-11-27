class AddTodoListToTodos < ActiveRecord::Migration[7.1]
  def change
    add_reference :todos, :todo_list, null: false, foreign_key: true
  end
end
