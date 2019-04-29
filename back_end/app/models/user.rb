class User < ApplicationRecord
<<<<<<< HEAD
    has_many :weight_entries
    has_many :water_entries
    has_many :food_entries
    has_many :exercise_entries
  
    has_many :food_options, through: :food_entries
    has_many :exercise_options, through: :exercise_entries
  end
=======
  has_many :weight_entries
  has_many :water_entries
  has_many :food_entries
  has_many :exercise_entries

  has_many :food_options, through: :food_entries
  has_many :exercise_options, through: :exercise_entries
 end
>>>>>>> d795354afc81f7724da3b06217473b97aee4ddfa
