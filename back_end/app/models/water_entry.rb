class WaterEntry < ApplicationRecord
  belongs_to :user

  scope :monthly_entries, -> { where("drunk_at > ?", 1.month.ago) }
  scope :weekly_entries,  -> { where("drunk_at > ?", 1.week.ago) }
  scope :daily_entries,   -> { where("drunk_at > ?", 1.day.ago) }

end
