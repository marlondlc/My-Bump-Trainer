class WeightEntry < ApplicationRecord
  belongs_to :user

  scope :weekly_entries,   -> { where("week > ?", 1.day.ago) }
end
