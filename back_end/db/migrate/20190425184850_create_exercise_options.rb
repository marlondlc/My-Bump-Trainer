class CreateExerciseOptions < ActiveRecord::Migration[5.2]
  def change
    create_table :exercise_options do |t|
      t.string :name
      t.string :intensity
      t.string :type
      t.references :exercise_types, foreign_key: true, index:true
      t.timestamps
    end
  end
end

# create_table :exercise_types do |t|
#   t.string :name --> KAYAK/RUNNING/CYCLING
#   t.string :intensity --> LOW/MEDIUM/HIGH
#   t.string :type --> CARDIO/STRENGTH-training