class Api::V1::ApplicationController < ActionController::API

  include ActionController::Helpers
  helper UserHelper

end


# we’ll make the controller throw a null
# session because we’re going to request json, which is different to the
# html (which is requested by default).