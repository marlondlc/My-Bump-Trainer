class WeightEntriesController < ApplicationController

  def index
    @Weight_entries = WeightEntry.all.user(created_at: :desc)
  end

  def show
    #user = User.find(params:[:id]) remember sessions!
    respond_to do |format|
      format.json
       render :json => @user.to_json
     end
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
