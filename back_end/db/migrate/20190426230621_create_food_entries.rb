class CreateFoodEntries < ActiveRecord::Migration[5.2]
  def change
    create_table :food_entries do |t|
      t.float :serving_size
      t.datetime :ate_at
      t.belongs_to :user, :food_option, index: true
      t.timestamps
    end
  end
end
