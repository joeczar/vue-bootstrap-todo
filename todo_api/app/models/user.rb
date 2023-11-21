class User < ApplicationRecord
  has_many :todos, foreign_key: :created_by
  validates :email, presence: true, uniqueness: true

  before_create :generate_token

  def generate_token
    self.token = JwtService.encode({ user_id: id })
    self.token_expires_at = 2.hours.from_now
  end

  def token_expired?
    Time.current > self.token_expires_at
  end

  def invalidate_token
    self.token = nil
  end

end
