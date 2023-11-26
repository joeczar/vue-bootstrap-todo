Rails.application.routes.draw do

  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
  resources :todos
  resources :sessions, only: [:create]
  resources :registrations, only: [:create]
  delete :logout, to: "sessions#logout"
  get :logged_in, to: "sessions#logged_in"
  root to: "static#home"

  # TodoLists
  resources :todo_lists do
    resources :todos, only: [:create, :update, :destroy]
  end
end
