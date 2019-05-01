Rails.application.routes.draw do
  post 'user_token' => 'user_token#create'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :users
      resources :water_entries, only: [:destroy, :edit]
      resources :weight_entries, only: [:destroy, :edit]
      resources :food_entries, only: [:destroy, :edit]
      resources :exercise_entries, only [:destroy, :edit]
      resources :water_entries, only: [:index, :create] do
        collection do
          get 'month'
          get 'week'
          get 'day'
        end
      end

      resources :weight_entries, only: [:index, :create] do
        collection do
          get 'week'
        end
      end

      resources :food_entries, only: [:index, :create] do
        collection do
          get 'month'
          get 'week'
          get 'day'
        end
      end
      resources :exercise_entries, only: [:index, :create] do
        collection do
          get 'month'
          get 'week'
          get 'day'
        end
      end
    end
  end
end
