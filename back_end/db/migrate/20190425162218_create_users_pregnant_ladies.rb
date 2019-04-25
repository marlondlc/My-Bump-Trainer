class CreateUsersPregnantLadies < ActiveRecord::Migration[5.2]
  def change
    create_table :users_pregnant_ladies do |t|
      t.string :first_name
      t.string :last_name
      t.date :dob
      t.date :due_date
      t.integer :initial_weight
      t.integer :height
      t.integer :water_bottle

      t.timestamps
    end
  end
end
