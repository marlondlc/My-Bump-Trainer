class ExerciseEntry < ApplicationRecord
  belongs_to :user
  belongs_to :exercise_option
end
