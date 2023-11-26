class TodoList < ApplicationRecord
  belongs_to :user
  has_many :todos, dependent: :destroy

  validates_presence_of :title
  validates_uniqueness_of :title, scope: :user_id
end
