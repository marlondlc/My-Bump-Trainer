class Api::V1::WaterEntriesController < Api::V1::ApplicationController

  def index

    @waters =  User.find(1).water_entries
    render json: @waters

  end

  def show
    #user = User.find(params:[:id]) remember sessions!
    # respond_to do |format|
    #   format.json
    #   render :json => @user.to_json
    # end
  end

  def new
  end

  def create
  end

  def edit
  end

  def update
  end

  def destroy
  end

end
