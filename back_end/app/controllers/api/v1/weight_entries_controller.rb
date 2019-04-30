class WeightEntriesController < ApplicationController

  def index
    @weight =  User.find(1).weight_entries  #for the time being use "User.find(1)" after we fix issue with "current_user" use this.
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
    @weight_entry = User.find(1) # ALL the user.find(1) will be current users
    @weight_entry.destroy
    render json: weight_entry #can we add ", :notice => "Your weight entry has been deleted" "
  end

  def day
    @daily = current_user.weight_entries.daily_entries
    render json: @daily
  end

end
