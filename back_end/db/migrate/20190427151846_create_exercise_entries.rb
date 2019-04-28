class CreateExerciseEntries < ActiveRecord::Migration[5.2]
  def change
    create_table :exercise_entries do |t|
      t.datetime :start_time
      t.datetime :end_time
      t.belongs_to :user, :exercise_option, index: true
      t.timestamps
    end
  end
end
