class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.datetime :time_game_won, null: true
      t.timestamps
    end
  end
end
