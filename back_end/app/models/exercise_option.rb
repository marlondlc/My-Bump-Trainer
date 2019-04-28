class ExerciseOption < ApplicationRecord
  belongs_to :exercise_type
  has_many :exercise_entries
  has_many :users, through: :exercise_entries
end
