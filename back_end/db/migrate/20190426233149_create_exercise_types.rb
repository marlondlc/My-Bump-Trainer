class CreateExerciseTypes < ActiveRecord::Migration[5.2]
  def change
    create_table :exercise_types do |t|
      t.string :name
      t.belongs_to :exercise_option, index: true
      t.timestamps
    end
  end
end
