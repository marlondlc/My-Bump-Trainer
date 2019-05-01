# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_04_30_173207) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "exercise_entries", force: :cascade do |t|
    t.datetime "start_time"
    t.datetime "end_time"
    t.bigint "user_id"
    t.bigint "exercise_option_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["exercise_option_id"], name: "index_exercise_entries_on_exercise_option_id"
    t.index ["user_id"], name: "index_exercise_entries_on_user_id"
  end

  create_table "exercise_options", force: :cascade do |t|
    t.string "name"
    t.string "intensity"
    t.bigint "exercise_type_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["exercise_type_id"], name: "index_exercise_options_on_exercise_type_id"
  end

  create_table "exercise_types", force: :cascade do |t|
    t.string "name"
    t.bigint "exercise_option_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["exercise_option_id"], name: "index_exercise_types_on_exercise_option_id"
  end

  create_table "food_entries", force: :cascade do |t|
    t.float "serving_size"
    t.datetime "ate_at"
    t.bigint "user_id"
    t.bigint "food_option_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["food_option_id"], name: "index_food_entries_on_food_option_id"
    t.index ["user_id"], name: "index_food_entries_on_user_id"
  end

  create_table "food_options", force: :cascade do |t|
    t.string "name"
    t.float "calories_per_serving"
    t.bigint "food_type_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["food_type_id"], name: "index_food_options_on_food_type_id"
  end

  create_table "food_types", force: :cascade do |t|
    t.string "name"
    t.bigint "food_option_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["food_option_id"], name: "index_food_types_on_food_option_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.date "dob"
    t.date "due_date"
    t.integer "initial_weight"
    t.integer "height"
    t.integer "water_bottle"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "password_digest"
  end

  create_table "water_entries", force: :cascade do |t|
    t.integer "volume"
    t.datetime "drunk_at"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_water_entries_on_user_id"
  end

  create_table "weight_entries", force: :cascade do |t|
    t.integer "weight"
    t.date "date"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_weight_entries_on_user_id"
  end

  add_foreign_key "water_entries", "users"
  add_foreign_key "weight_entries", "users"
end
