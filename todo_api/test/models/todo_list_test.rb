require 'test_helper'

class TodoListTest < ActiveSupport::TestCase

  setup do
    @user = users(:one)
    @todo_list = todo_lists(:one)
  end


  test 'should be valid' do
    assert @todo_list.valid?
  end

  test 'should have a title' do
    @todo_list.title = nil
    assert_not @todo_list.valid?
    assert_includes @todo_list.errors[:title], "can't be blank"
  end

  test 'should have a unique title per user' do
    duplicate_todo_list = @todo_list.dup
    @todo_list.save
    assert_not duplicate_todo_list.valid?
  end

  test 'should belong to a user' do
    @todo_list.user = nil
    assert_not @todo_list.valid?
  end


  test 'should destroy associated todos' do
    assert_difference 'Todo.count', -2 do  # The count change should match the number of todos from the fixtures associated with the list
      todo_lists(:one).destroy
    end
  end
end
