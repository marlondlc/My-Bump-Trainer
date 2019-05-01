class Api::V1::WaterEntriesController < Api::V1::ApplicationController

  def index
    @waters =  User.find(1).water_entries  #for the time being use "User.find(1)" after we fix issue with "current_user" use this.
    render json: @waters
  end

  #RECEIVING DATA:
  def create

    @water_entry = User.find(1).water_entries.create(
      volume: params[:volume],
      drunk_at: params[:drunk_at]
    )

    @water_entry.save
    render json: @water_entry
  end

  def destroy
    @water_entry = User.find(1) # ALL the user.find(1) will be current users
    @water_entry.destroy
    render json: water_entry #can we add ", :notice => "Your water entry has been deleted" "
  end


  #SENDING DATA:
  def month
    @monthly = User.find(1).water_entries.monthly_entries
    render json: @monthly
  end

  def week
    @weekly = User.find(1).water_entries.weekly_entries
    render json: @weekly
  end

  def day
    @daily = User.find(1).water_entries.daily_entries
    render json: @daily
  end

end
