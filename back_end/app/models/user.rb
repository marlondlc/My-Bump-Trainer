class User < ApplicationRecord
  has_many :weight_entries
  has_many :water_entries
  has_many :food_entries
  has_many :exercise_entries

  has_many :food_options, through: :food_entries
  has_many :exercise_options, through: :exercise_entries
 end
