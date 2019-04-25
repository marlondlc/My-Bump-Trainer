class CreateFoodOptions < ActiveRecord::Migration[5.2]
  def change
    create_table :food_options do |t|
      t.string :name
      t.string :calories_per_serving
      t.string :group
      t.references :food_types, foreign_key: true, index:true
      t.timestamps
    end
  end
end
