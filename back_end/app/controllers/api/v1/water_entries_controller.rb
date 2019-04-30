class Api::V1::WaterEntriesController < Api::V1::ApplicationController

  def index
    @waters =  User.find(1).water_entries  #for the time being use "User.find(1)" after we fix "current_user"
    render json: @waters
  end

  #RECEIVING DATA:
  def create
    #@water_entry = current_user.water_entries.create(params[:water_entries])
    #NOTE: depending on how V send the data from the front end using axios either the object "water_entries"
    #containing volume/drunk_at within
    #EXAMPLE: (this receives a whole obj VS sending each data separately "One being used currently")
    #         params{ water_entries:{
    #                     volume
    #                     drunk_at}
    #                }
    # OR below:
    @water_entry = User.find(1).water_entries.create(
      volume: params[:volume],
      drunk_at: params[:drunk_at]
    )

    @water_entry.save
    render json: @water_entry
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
