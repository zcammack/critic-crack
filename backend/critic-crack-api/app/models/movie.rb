class Movie < ApplicationRecord
    belongs_to :category
    
    validates :name, presence: true
    validates :name, uniqueness: true
end
