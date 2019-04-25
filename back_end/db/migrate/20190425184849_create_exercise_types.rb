class CreateExerciseTypes < ActiveRecord::Migration[5.2]
  def change
    create_table :exercise_types do |t|
      t.string :name
      t.references foreign_key: true, index:true
      t.timestamps
    end
  end
end
