Rails.application.routes.draw do
  
  resources :movies
  resources :categories, only: [:index]

end
