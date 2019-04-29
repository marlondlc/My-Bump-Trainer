require 'faker'


# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



WeightEntry.destroy_all
WaterEntry.destroy_all
FoodType.destroy_all
FoodOption.destroy_all
FoodEntry.destroy_all
ExerciseType.destroy_all
ExerciseOption.destroy_all
ExerciseEntry.destroy_all
User.destroy_all
User.connection.execute('ALTER SEQUENCE users_id_seq RESTART WITH 1')
WeightEntry.connection.execute('ALTER SEQUENCE weight_entries_id_seq RESTART WITH 1')
WaterEntry.connection.execute('ALTER SEQUENCE water_entries_id_seq RESTART WITH 1')
FoodType.connection.execute('ALTER SEQUENCE food_types_id_seq RESTART WITH 1')
FoodEntry.connection.execute('ALTER SEQUENCE food_entries_id_seq RESTART WITH 1')
FoodOption.connection.execute('ALTER SEQUENCE food_options_id_seq RESTART WITH 1')
ExerciseType.connection.execute('ALTER SEQUENCE exercise_types_id_seq RESTART WITH 1')
ExerciseOption.connection.execute('ALTER SEQUENCE exercise_options_id_seq RESTART WITH 1')
ExerciseEntry.connection.execute('ALTER SEQUENCE exercise_entries_id_seq RESTART WITH 1')


5.times do | index |
  User.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    dob: Faker::Date.birthday(18, 65),                    #Random DOB from ages 18-65
    due_date: Faker::Date.forward(23),                    #Random Due date in the future
    initial_weight: Faker::Number.number(3),
    height: 6,
    water_bottle: 2,
    email: Faker::Internet.email
  )
end

p "Created #{User.count} profiles"
  # User.create(first_name: "Sonia", last_name: "Pacocha", email: "sherillorn@farrell.com", dob: "Sat, 27 Feb 1965", due_date: "Thu, 16 May 2019",  initial_weight: 326,  height: 6,  water_bottle: 2)
  # User.create(first_name: "Tanya", last_name: "Pac", email: "sherillorn@farrell.com", dob: "Sat, 27 Feb 1965", due_date: "Thu, 16 May 2019",  initial_weight: 326,  height: 6,  water_bottle: 2)

p " ---------------------------------------------------------- "



5.times do | index |
  WeightEntry.create(
    weight: Faker::Number.number(3),                             #Random (3) digit number
    date: Faker::Time.between(5.days.ago, Time.now),             #Random date from 5 days ago
    user_id: Faker::Number.between(1, 5)
  )
end

p "Created #{WeightEntry.count} weight entries"

p " ---------------------------------------------------------- "

5.times do | index |
  WaterEntry.create(
    volume: 2,
    drunk_at: Faker::Time.backward(index * 2, :evening),
    # user_id: Faker::Number.between(1, 5)
    user_id: 1
  )
end

p "Created #{WaterEntry.count} water entries"
p " ---------------------------------------------------------- "


5.times do | index |
  FoodType.create(
    name: "fruits"

  )
end

p "Created #{FoodType.count} food types"
p " ---------------------------------------------------------- "

5.times do | index |
  FoodOption.create(
    name: Faker::Food.fruits,
    #Faker::Food.vegetables
    calories_per_serving: Faker::Number.decimal(1),            # Produces a number with 1 digits leading and trailing the decimal
    food_type_id: index + 1
  )
end

p "Created #{FoodOption.count} food options"

p " ---------------------------------------------------------- "


5.times do | index |
  FoodEntry.create(
    serving_size: 1.5,
    ate_at: Faker::Time.backward(14, :evening),
    user_id: index + 1,
    food_option_id: index + 1
  )
end

p "Created #{FoodEntry.count} food entries"
p " ---------------------------------------------------------- "


5.times do | index |
  ExerciseType.create(
    name: "cardio"
  )
end

p "Created #{ExerciseType.count} Exercise types"
p " ---------------------------------------------------------- "

5.times do | index |
  ExerciseOption.create(
    name: "cardio",
    intensity: "high",
    exercise_type_id: index + 1
  )
end

p "Created #{ExerciseOption.count} Exercise Option"
p " ---------------------------------------------------------- "

# ExerciseEntry.create!(
#     start_time: '2019-04-27 21:05:11.53454',
#     end_time: '2019-04-27 21:05:11.53454',
#     user_id: 1,
#     exercise_option_id: 1
# )

5.times do | index |
ExerciseEntry.create(
  start_time: Faker::Time.between(2.days.ago, Date.today, :afternoon),
  end_time: Faker::Time.between(2.days.ago, Date.today, :evening),
  user_id: index + 1,
  exercise_option_id: index + 1
)
end

p "Created #{ExerciseEntry.count} Exercise Entry"