class Api::V1::ApplicationController < ActionController::API
  include Knock::Authenticable
  include ActionController::Helpers
  before_action :authenticate_user
  helper UserHelper

end
