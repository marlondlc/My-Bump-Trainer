class CreateWeightEntries < ActiveRecord::Migration[5.2]
  def change
    create_table :weight_entries do |t|
      t.integer :weight
      t.date :date
      t.references :user, foreign_key: true, index: true
      t.timestamps
    end
  end

  
end
