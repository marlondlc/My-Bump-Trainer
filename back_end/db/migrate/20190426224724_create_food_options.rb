class CreateFoodOptions < ActiveRecord::Migration[5.2]
  def change
    create_table :food_options do |t|
      t.string :name
      t.float :calories_per_serving
      t.belongs_to :food_type, index: true
      t.timestamps
    end
  end
end
