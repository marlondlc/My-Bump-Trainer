class FoodEntry < ApplicationRecord
  belongs_to :user
  belongs_to :food_option

  scope :monthly_entries, -> { where("ate_at > ?", 1.month.ago) }
  scope :weekly_entries,  -> { where("ate_at > ?", 1.week.ago) }
  scope :daily_entries,   -> { where("ate_at > ?", 1.day.ago) }
end
