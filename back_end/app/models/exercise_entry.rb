class ExerciseEntry < ApplicationRecord
  belongs_to :users_pregnant_ladies
  belongs_to :exercise_types
end
