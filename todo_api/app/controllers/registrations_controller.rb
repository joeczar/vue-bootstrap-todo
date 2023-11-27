class RegistrationsController < ApplicationController
  def create
    puts "RegistrationsController#create"
    user = User.create!(
      email: params['user']['email'],
      password: params['user']['password'],
      password_confirmation: params['user']['password_confirmation']
    )

    if user
      session[:user_id] = user.id
      render json: {
        status: :created,
        user: user
      }
      puts "User created, User ID: #{user.id}"
    else
      puts "User not created"
      render json: {
        status: 500
      }

    end
  end
end
