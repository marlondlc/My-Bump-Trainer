class UsersPregnantLady < ApplicationRecord
  has_many :water_entries
  has_many :food_entries
  has_many :exercise_entries
  has_many :weight_entries
  validates :email, uniqueness: true
end

#validates :first_name, presence: true
#validates :last_name, presence: true, uniqueness: {case_sensitive: false}
# should :email have uniqueness: {case_sensitive: false}?