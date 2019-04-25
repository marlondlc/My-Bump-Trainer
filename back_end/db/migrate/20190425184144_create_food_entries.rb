class CreateFoodEntries < ActiveRecord::Migration[5.2]
  def change
    create_table :food_entries do |t|
      t.integer :serving_size
      t.datetime :ate_at
      t.references :users_pregnant_ladies, foreign_key: true, index:true
      t.timestamps
    end
  end
end
