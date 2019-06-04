Rails.application.routes.draw do

  devise_for :users
  root to: 'static#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :v1, defaults: { format: 'json' } do
    post 'check', to: 'game#check_position'
  end
end
