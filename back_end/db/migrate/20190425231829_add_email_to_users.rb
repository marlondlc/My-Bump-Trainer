class AddEmailToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users_pregnant_ladies, :email, :string
  end
end
