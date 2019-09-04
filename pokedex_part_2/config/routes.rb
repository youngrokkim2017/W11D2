Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :pokemon, only: [:create, :index, :show]
  end

  #defaults option tells the controller to first look for a .json.jbuilder view 
  #rather than an html.erb view
end
