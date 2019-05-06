class Api::V1::ExerciseEntriesController < Api::V1::ApplicationController

  def index
    @exercises = current_user.exercise_entries
    render json: @exercises
  end

  def create
    @exercise_entry = current_user.exercise_entries.new(
      exercise_type: params[:exercise_type]
      start_time: params[:start_time],
      end_time: params[:end_time]
    )

    @exercise_entry.save
    render json: @exercise_entry
  end

  def destroy
    @exercise_entry = current_user
    @exercise_entry.destroy
    render json: exercise_entry
  end


  #sending Data
  def month
    @monthly = User.find(1).exercise_entries.monthly_entries
    render json: @monthly
  end

  def week
    @weekly = current_user.exercise_entries.weekly_entries
    render json: @weekly
  end

  def day
    @daily = current_user.exercise_entries.daily_entries
    render json: @daily
  end
end
