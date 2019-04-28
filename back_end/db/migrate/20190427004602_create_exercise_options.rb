class CreateExerciseOptions < ActiveRecord::Migration[5.2]
  def change
    create_table :exercise_options do |t|
      t.string :name
      t.string :intensity
      t.belongs_to :exercise_type, index: true
      t.timestamps
    end
  end
end
