<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');
/*
| -------------------------------------------------------------------------
| URI ROUTING
| -------------------------------------------------------------------------
| This file lets you re-map URI requests to specific controller functions.
|
| Typically there is a one-to-one relationship between a URL string
| and its corresponding controller class/method. The segments in a
| URL normally follow this pattern:
|
|	example.com/class/method/id/
|
| In some instances, however, you may want to remap this relationship
| so that a different class/function is called than the one
| corresponding to the URL.
|
| Please see the user guide for complete details:
|
|	http://codeigniter.com/user_guide/general/routing.html
|
| -------------------------------------------------------------------------
| RESERVED ROUTES
| -------------------------------------------------------------------------
|
| There area two reserved routes:
|
|	$route['default_controller'] = 'welcome';
|
| This route indicates which controller class should be loaded if the
| URI contains no data. In the above example, the "welcome" class
| would be loaded.
|
|	$route['404_override'] = 'errors/page_missing';
|
| This route will tell the Router what URI segments to use if those provided
| in the URL cannot be matched to a valid route.
|
*/

$route['default_controller'] = "site";
$route['404_override'] = 'error';


/*********** USER DEFINED ROUTES *******************/
$route['index'] = 'site/index';
$route['loginMe'] = 'login/loginMe';
$route['dashboard'] = 'user';
$route['logout'] = 'user/logout';
$route['userListing'] = 'user/userListing';
$route['userListing/(:num)'] = "user/userListing/$1";
$route['addNew'] = "user/addNew";

$route['addNewUser'] = "user/addNewUser";
$route['editOld'] = "user/editOld";
$route['editOld/(:num)'] = "user/editOld/$1";
$route['editUser'] = "user/editUser";
$route['deleteUser'] = "user/deleteUser";
$route['loadChangePass'] = "user/loadChangePass";
$route['changePassword'] = "user/changePassword";
$route['pageNotFound'] = "user/pageNotFound";
$route['checkEmailExists'] = "user/checkEmailExists";

$route['forgotPassword'] = "login/forgotPassword";
$route['resetPasswordUser'] = "login/resetPasswordUser";
$route['resetPasswordConfirmUser'] = "login/resetPasswordConfirmUser";
$route['resetPasswordConfirmUser/(:any)'] = "login/resetPasswordConfirmUser/$1";
$route['resetPasswordConfirm/(:any)/(:any)'] = "login/resetPasswordConfirmUser/$1/$2";
$route['createPasswordUser'] = "login/createPasswordUser";

$route['subscriptionListing'] = 'subscription/subscriptionListing';
$route['subscriptionListing/(:num)'] = "subscription/subscriptionListing/$1";
$route['addNeweditSubscription'] = "subscription/addNew";
$route['addNewSubView'] = "subscription/addNew";
$route['addNewSubscription'] = "subscription/addNewSubscription";
$route['editOldSubscription'] = "subscription/editOld";
$route['editOldSubscription/(:num)'] = "subscription/editOld/$1";
$route['editSubscription'] = "subscription/editSubscription";
$route['deleteSubscription'] = "subscription/deleteSubscription";

$route['subscriptionTopupListing'] = 'subscription/subscriptionTopupListing';
$route['subscriptionTopupListing/(:num)'] = "subscription/subscriptionTopupListing/$1";
$route['addNeweditSubscriptionTopup'] = "subscription/addNewTopup";
$route['addNewSubTopupsView'] = "subscription/addNewTopup";
$route['addNewSubscriptionTopup'] = "subscription/addNewSubscriptionTopup";
$route['editOldSubscriptionTopup'] = "subscription/editOldTopup";
$route['editOldSubscriptionTopup/(:num)'] = "subscription/editOldTopup/$1";
$route['editSubscriptionTopup'] = "subscription/editSubscriptionTopup";
$route['deleteSubscriptionTopup'] = "subscription/deleteSubscriptionTopup";

$route['product/(:num)'] = "product/productListing/$1";
// $route['product/(:num)/(:num)'] = "product/productListing/$1/$2";

//Routes for Pages...... 


$route['vendorslisting/(:any)']="site/getVendorListing/$1";

// $route['vendorslisting/(:any)/(:num)']="site/getVendorListing/$1/$2";
$route['designers']="site/getDesigners";


$route['aboutus']="site/aboutus";
$route['packages']="site/packages";
$route['packages/(:any)']="site/packages/$1"; //For upgradation
$route['vendorInfo']="site/vendorInfo";
$route['vendorInfo/(:any)']="site/vendorInfo/$1";
$route['vendorSelect']="site/vendorSelect";
$route['ProductDetails']="site/ProductDetails"; //
$route['ProductDetails/(:any)/(:any)']="site/ProductDetails/$1/$2";
$route['newProductInfo']="site/newProductInfo";
$route['updateproductinfo'] = "product/updateProductInfo";
$route['vendors/(:any)'] ="site/getVendorListing/$1";

/*CMS routes */
//Front page CMS 
$route['cms'] = "cms";
$route['cms/edit/(:num)'] = "cms/editOld/$1";
$route['cms/edit_page_content'] = "cms/editPageContent";

//Pages for and after vendor login
$route['site/vendoradmin']="site/vendorHome";


//For adding new user
$route['addNew']="site/addNew";
$route['site/addnewuser']="site/addNewUser";

//For Edit Profile
$route['editProfile']="site/editProfile";

//For search reslts
$route['vendorListing']="site/vendorListing";
//For Mail 
$route['feedback']="site/feedback";

$route['login-register'] = "site/loginRegister";
$route['login-register/(:any)'] = "site/loginRegister/$1";
$route['test_upload'] = "site/testing";

$route['confirmemail/(:any)'] = "site/confirmEmail/$1";
$route['thankyou'] = "site/thankYou";
$route['order-history'] = 'site/orderHistory';
$route['orders'] = 'site/orders';
$route['profile']       = 'site/profile';

$route['site/booking']  = 'site/productBooking';

$route['site/profileupdate'] = 'site/profileUpdate';
$route['contactus'] = "site/contactUs";
$route['reviewrating'] = "site/reviewRating";
$route['review-rating'] = "site/getReviewRatings";

$route['product/changestatus'] = "product/changeStatus";
$route['showproductdetails/(:num)']   = "product/showProductDetails/$1";

$route['user/changestatus'] = "user/changeStatus";
$route['successfultransaction'] = "site/successfulTransaction";
$route['canceltransaction'] = "site/cancelTransaction";

$route['forgot-passowrd'] = 'site/forgotPassword';

$route['reviewListing'] = 'user/reviewAndRatingListing';
$route['reviewListing/(:num)'] = "user/reviewAndRatingListing/$1";

$route['review/changereviewstatus'] = "user/changeReviewStatus";
$route['site/topuppurchase'] = "site/topUpPurchase";

$route['site/upgradesubscription'] = "site/upgradeSubscription";
$route['commingsoon'] = "site/commingSoon";
$route['terms']='site/termsAndConditions';
/* End of file routes.php */
/* Location: ./application/config/routes.php */
