class WeightEntriesController < ApplicationController

  def index
    @weight =  current_user.water_entries
    render json: @weight

  end

  def create
    # have a look at how water entry was created (this was replicated rfom there)
    @weight_entry = User.find(1).weight_entries.create(
      weight: params[:weight],
      date: params[:date]
    )
  end

  def edit
  end

  def destroy
  end

  def day
    @daily = current_user.weight_entries.daily_entries
    render json: @daily
  end

end
