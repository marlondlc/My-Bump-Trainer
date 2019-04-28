class FoodEntry < ApplicationRecord
  belongs_to :user
  belongs_to :food_option
end
