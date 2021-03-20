class CreateMovies < ActiveRecord::Migration[6.0]
  def change
    create_table :movies do |t|
      t.string :name
      t.integer :rating
      t.string :director
      t.string :plot
      t.integer :category_id

      t.timestamps
    end
  end
end
