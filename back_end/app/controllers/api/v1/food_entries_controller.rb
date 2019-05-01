class Api::V1::FoodEntriesController < Api::V1::ApplicationController

  def index
   @food = User.find(1).food_entries
   render json: @food
  end


  def create
    @food_entry = User.find(1).food_entries.create(
      serving_size: params[:serving_size],
      ate_at: params[:ate_at]
    )

    @food_entry.save
    render json: @food_entry #can we add ", :notice => "Your food entry has been added" "
  end

  def edit
  end

  def update

  end

  def destroy
    @food_entry = User.find(1) # ALL the user.find(1) will be current users
    @food_entry.destroy
    render json: food_entry #can we add ", :notice => "Your food entry has been deleted" "

  end

  #sending Data
  def month
    @monthly = User.find(1).food_entries.monthly_entries
    render json: @monthly
  end

  def week
    @weekly = User.find(1).food_entries.weekly_entries
    render json: @weekly
  end

  def day
    @daily = User.find(1).food_entries.daily_entries
    render json: @daily
  end

end
