class FoodEntry < ApplicationRecord
  belongs_to :users_pregnant_ladies
  belongs_to :food_options
end
