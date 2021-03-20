class MovieSerializer < ActiveModel::Serializer
  attributes :id, :name, :rating, :director, :plot
  belongs_to :category
end
