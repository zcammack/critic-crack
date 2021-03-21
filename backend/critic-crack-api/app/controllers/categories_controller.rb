class CategoriesController < ApplicationController

    def index
        @categories = Category.all
        
        render json: @categories
    end

    private
    
    def category_params
        params.require(:category).permit(:title, :movie_id)
    end
end
