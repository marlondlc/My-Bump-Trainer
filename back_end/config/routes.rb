Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :users
      resources :water_entries, only: [:index, :create] do
        collection do
          get 'month'
          get 'week'
          get 'day'
        end
      end

      resources :weight_entries, only: [:index] do
        collection do
          get 'week'
        end
      end
    end
  end
end
