class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.date :dob
      t.date :due_date
      t.integer :initial_weight
      t.integer :height
      t.integer :water_bottle

      # validates :first_name, presence: true {case_senstive: false}
      # validates :last_name, presence: true {case_senstive: false}
      # validates :email, uniqueness: true {case_senstive: false}
      t.timestamps
    end
  end
end
