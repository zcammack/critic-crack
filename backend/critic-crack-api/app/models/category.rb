class Category < ApplicationRecord
    has_many :movies

    validates :title, presence: true
    validates :title, uniqueness: true
end
