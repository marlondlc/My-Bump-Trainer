require 'faker'
require 'activerecord-reset-pk-sequence'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



WeightEntry.destroy_all
UsersPregnantLady.destroy_all


5.times do | index |
  UsersPregnantLady.create!(
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

p "Created #{UsersPregnantLady.count} profiles"
p " ---------------------------------------------------------- "



5.times do | index |
  WeightEntry.create!(
    weight: [100..200].sample,                             #Random (3) digit number
    date: Faker::Time.between(5.days.ago, Time.now),       #Random date from 5 days ago
    users_pregnant_ladies: UsersPregnantLady.find(Faker::Number.between(1, 5))
  )
end

p "Created #{WeigthEntry.count} weigth entries"
p " ---------------------------------------------------------- "

# WaterEntry.destroy_all

# 5.times do | index |
#   WaterEntry.create(
#     volume: 2,
#     drunk_at: Faker::Time.backward(14, :evening)            #Random time in the past
#   )
# end

# p "Created #{WaterEntry.count} water entries"
p " ---------------------------------------------------------- "

# FoodTypes.destroy_all

# 5.times do | index |
#   FoodTypes.create(
#     name: "fruits"
#   )
# end

# p "Created #{FoodTypes.count} food types"
p " ---------------------------------------------------------- "

# FoodOption.destroy_all


# 5.times do | index |
#   FoodOption.create(
#     name: Faker::Food.fruits
#     #Faker::Food.vegetables
#     calories_per_serving: Faker::Number.decimal(2)            # Produces a number with 2 digits leading and trailing the decimal
#     group:
# end

# p "Created #{FoodOptions.count} food options"
p " ---------------------------------------------------------- "

# ExerciseType.destroy_all

# 5.times do | index |
#   ExerciseType.create(
#       start_time: Faker::Time.forward(23, :morning),
#       end_time: Faker::Time.backward(14, :evening)
#   )
# end

# p "Created #{ExerciseType.count} Exercise types"
p " ---------------------------------------------------------- "

# ExerciseOption.destroy_all

# 5.times do | index |
# ExerciseOption.create(
#   name: Faker::
#   intensity:
#   type:
# )
# end

# p "Created #{ExerciseOption.count} Exercise option"




