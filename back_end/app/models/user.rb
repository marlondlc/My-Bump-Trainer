class User < ApplicationRecord
  has_many :weight_entries
  has_many :water_entries
  has_many :food_entries
  has_many :exercise_entries

  has_many :food_options, through: :food_entries
  has_many :exercise_options, through: :exercise_entries
<<<<<<< HEAD

=======
  
>>>>>>> 5ed23ceeedb12455e65ce2a87b76cd06d31b63cb
  has_secure_password
  validates :email, presence: true

  def to_token_payload
    {
        sub: id,
        email: email
    }
  end
end
