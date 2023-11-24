class SessionsController < ApplicationController
include CurrentUserConcern
  def create
    user = User
      .find_by(email: params["user"]["email"])
      .try(:authenticate, params["user"]["password"])
    # log user
    puts "user: #{user}"
    if user
      session[:user_id] = user.id
      render json: {
        status: :created,
        logged_in: true,
        user: user
      }
    else
      render json: {
        status: 401,
        errors: ['no such user, please try again']
      }
    end
  end

  def logged_in
    if @current_user
      render json: {
        logged_in: true,
        user: @current_user
      }
    else
      puts "logged_in: false"
      render json: {
        logged_in: false
      }
    end
  end

  def logout
    reset_session
    puts "logged_out: true"
    render json: { status: 200, logged_out: true }
  end
end
