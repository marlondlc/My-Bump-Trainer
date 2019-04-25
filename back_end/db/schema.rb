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

ActiveRecord::Schema.define(version: 2019_04_25_184851) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "exercise_entries", force: :cascade do |t|
    t.integer "id_exercise_type"
    t.datetime "start_time"
    t.datetime "end_time"
    t.bigint "users_pregnant_ladies_id"
    t.bigint "exercise_options_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["exercise_options_id"], name: "index_exercise_entries_on_exercise_options_id"
    t.index ["users_pregnant_ladies_id"], name: "index_exercise_entries_on_users_pregnant_ladies_id"
  end

  create_table "exercise_options", force: :cascade do |t|
    t.string "name"
    t.string "intensity"
    t.string "type"
    t.bigint "exercise_types_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["exercise_types_id"], name: "index_exercise_options_on_exercise_types_id"
  end

  create_table "exercise_types", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "food_entries", force: :cascade do |t|
    t.integer "serving_size"
    t.datetime "ate_at"
    t.bigint "users_pregnant_ladies_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["users_pregnant_ladies_id"], name: "index_food_entries_on_users_pregnant_ladies_id"
  end

  create_table "food_options", force: :cascade do |t|
    t.string "name"
    t.string "calories_per_serving"
    t.string "group"
    t.bigint "food_types_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["food_types_id"], name: "index_food_options_on_food_types_id"
  end

  create_table "food_types", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users_pregnant_ladies", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.date "dob"
    t.date "due_date"
    t.integer "initial_weight"
    t.integer "height"
    t.integer "water_bottle"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "water_entries", force: :cascade do |t|
    t.integer "volume"
    t.datetime "drunk_at"
    t.bigint "users_pregnant_ladies_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["users_pregnant_ladies_id"], name: "index_water_entries_on_users_pregnant_ladies_id"
  end

  create_table "weight_entries", force: :cascade do |t|
    t.integer "weight"
    t.date "date"
    t.bigint "users_pregnant_ladies_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["users_pregnant_ladies_id"], name: "index_weight_entries_on_users_pregnant_ladies_id"
  end

  add_foreign_key "exercise_entries", "exercise_options", column: "exercise_options_id"
  add_foreign_key "exercise_entries", "users_pregnant_ladies", column: "users_pregnant_ladies_id"
  add_foreign_key "exercise_options", "exercise_types", column: "exercise_types_id"
  add_foreign_key "food_entries", "users_pregnant_ladies", column: "users_pregnant_ladies_id"
  add_foreign_key "food_options", "food_types", column: "food_types_id"
  add_foreign_key "water_entries", "users_pregnant_ladies", column: "users_pregnant_ladies_id"
  add_foreign_key "weight_entries", "users_pregnant_ladies", column: "users_pregnant_ladies_id"
end
