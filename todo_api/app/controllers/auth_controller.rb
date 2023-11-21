class AuthController < ApplicationController
  def send_token
    @user = User_find_or_create_by(email: params[:email])
    @user.generate_token
    @user.save

    UserMailer.token_email(@user).deliver_now
    render json: { message: 'Email sent' }, status: :ok
  end

  def verify_token
    @user = User.find_by(token: params[:token])
    if @user.present? && !@user.token_expired?
      @user.invalidate_token
      @user.save
      render json: { message: 'User Authenticated' }, status: :ok
    else
      render json: { message: 'Invalid Token' }, status: :not_found
    end
  end
end
