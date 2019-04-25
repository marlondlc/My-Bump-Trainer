class UsersPregnantLady < ApplicationRecord
  has_many :water_entries, :food_entries, :exercise_completions, :weight_entries
  validates :email, uniqueness: true
end
