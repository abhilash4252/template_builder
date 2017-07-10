class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  def index
    redirect_to '/public/index.html'
  end
end