require 'test_helper'

class StaticPagesControllerTest < ActionController::TestCase
  test "should get welcome_page" do
    get :welcome_page
    assert_response :success
  end
   test "should get home" do
    get :home
    assert_response :success
  end

  test "should get help" do
    get :help
    assert_response :success
  end

  test "should get about" do
    get :about
    assert_response :success
    assert_select "title", "About | Ruby on Rails Tutorial Sample App"
  end

end
