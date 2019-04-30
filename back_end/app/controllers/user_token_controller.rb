class UserTokenController < Knock::AuthTokenController
  #post 'user_token' => 'user_token#create'
  skip_before_action :verify_authenticity_token, raise: false
end
