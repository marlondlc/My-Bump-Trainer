class UsersPregnantLady < ApplicationRecord
  has_many :water_intake, :food_entries, :exercise_completions, :weigh_ins
end
