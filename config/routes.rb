Rails.application.routes.draw do
  root "locations#index"

  resources :locations
  resources :containers
  resources :items
end
