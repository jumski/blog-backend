class User < ActiveRecord::Base
  has_secure_password
  has_secure_token :auth_token

  validates :username, :password_digest, presence: true
end
