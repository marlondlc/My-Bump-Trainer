class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session

end


# Second, we’ll make a small adjustment to the application controller.
# Except throwing an exception, we’ll make the controller throw a null
# session because we’re going to request json, which is different to the
# html (which is requested by default).