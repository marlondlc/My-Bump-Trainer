class Api::V1::ApplicationController < ActionController::API

  include ActionController::Helpers
  helper UserHelper
  # def current_user
  #   @current_user ||= User.find(session[:user_id]) if session[:user_id]
  # end
  # helper_method :current_user
end


# we’ll make the controller throw a null
# session because we’re going to request json, which is different to the
# html (which is requested by default).