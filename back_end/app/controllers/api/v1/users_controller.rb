class Api::V1::UsersController < Api::V1::ApplicationController


  def new
    @user = User.new
  end

  def show
    @user = current_user
    render json: @user
  end

  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user
    else
      render json: @user.errors #can we add :notice => "You dont have the authority to view these details"
    end
  end

  def user_params
    params.require(:user).permit(
      :first_name,
      :last_name,
      :email,
      :password,
      :password_confirmation,
      :dob,
      :due_date,
      :height,
      :water_bottle
    )
  end

end
