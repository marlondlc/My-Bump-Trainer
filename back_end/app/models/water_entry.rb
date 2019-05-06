class WaterEntry < ApplicationRecord
  belongs_to :user

  scope :monthly_entries, -> { where("drunk_at > ?", 1.month.ago) }
  scope :weekly_entries,  -> { where("drunk_at > ?", 1.week.ago) }
  scope :daily_entries,   -> { where(:drunk_at => Time.now.beginning_of_day..Time.now.end_of_day) }
end
