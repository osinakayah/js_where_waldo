class CreateCharacters < ActiveRecord::Migration[5.2]
  def change
    create_table :characters do |t|
        t.string :name, null: false
        t.integer :positionX, null: false
        t.integer :positionY, null: false
        t.timestamps
    end
  end
end
