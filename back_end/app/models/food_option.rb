class FoodOption < ApplicationRecord
  belongs_to :food_type
  has_many :food_entries
  has_many :users, through: :food_entries
end
