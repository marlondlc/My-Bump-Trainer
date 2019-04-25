class CreateExerciseEntries < ActiveRecord::Migration[5.2]
  def change
    create_table :exercise_entries do |t|
      t.integer :id_exercise_type
      t.datetime :start_time
      t.datetime :end_time
      t.references :users_pregnant_ladies, :exercise_options, foreign_key: true, index:true
      t.timestamps
    end
  end
end
