class CreateFoodTypes < ActiveRecord::Migration[5.2]
  def change
    create_table :food_types do |t|
      t.string :name
      t.belongs_to :food_option, index: true
      t.timestamps
    end
  end
end
