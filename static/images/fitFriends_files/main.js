(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about/about.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"index_container\">\n  <nav class=\"navbar navbar-expand-sm navbar-dark\" style=\"background:transparent\">\n    <a class=\"navbar-brand\" [routerLink]=\"['/']\">\n      <img src=\"../assets/images/friendicon.png\" style=\"height: 30px; width: 30px;\" alt=\"friend icon\">\n      fitFriends</a>\n      <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\".navbar-collapse\" data-target=\"#navbarText\" aria-controls=\"navbarText\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarText\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n        </li>\n      </ul>\n\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/about']\">About</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n\n  <div class=\"more_container\">\n    <div class=\"mission_container\">\n      <h1 class=\"mission_title\">- Our Mission - </h1>\n      <p class=\"mssion_statement\">Finding a consistent gym partner has been difficult for individuals with non-traditional schedules. This app hopes to promote healthier living through mutual accountability and serves as a medium to connect people who share the same fitness plans, goals, and schedules.</p>\n    </div>\n\n    <div class=\"about_container\">\n      <h1 class=\"about_title\">About</h1>\n      <p class=\"about_info\">This website provides services which allows you to connect with people in your area with the same gym membership. There will be no matching system, but instead, <span class=\"font-weight: bold\">YOU</span> will be given the all the control.</p>\n\n      <h3 class=\"preference_title\">Preferences</h3>\n      <p class=\"preference_info\">Safety and comfort has always been a priority with platforms like these. After registering, you will be required to fill out a form with some goals and prefences which include your future gym partner's gender preference. Gender preference will be the most important factor in who will appear, so users can feel safe about not being harassed using this platform.</p>\n      <p class=\"preference_info\">Members who share the most fields of preferences and goals will show up at the top of your gym page, alongside the ability to message them.</p>\n\n      <h3 class=\"default_gym\">Default Gym</h3>\n      <p class=\"default_gym_info\">You will need to select a default gym after filling out the preference form. Navigating to non-default gyms will show no information other than the standard gym information, and setting a gym as defaults will show all possible members most closely related to your preferences and goals.</p>\n\n      <h3 class=\"warning\">WARNING</h3>\n      <p class=\"\">Please be careful with the people you meet over the internet. This app's creators will not be liable for mishaps.</p>\n    </div>\n\n\n    <div class=\"register_container\">\n      <div class=\"reg_content\">\n        <p>Try out fitFriends!</p>\n        <a [routerLink]=\"['/login']\" class=\"btn btn-info mr-3\">Login</a>\n        <a [routerLink]=\"['/register']\" class=\"btn btn-info\">Register</a>\n      </div>\n      </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/chat/chat.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chat/chat.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"msg_container\">\n  <mat-sidenav-container class=\"msg_sidenav\">\n    <mat-sidenav opened mode=\"side\" class=\"users_list\">\n      <h1>Chats</h1>\n      <mat-nav-list>\n        <mat-nav-list>\n          <span *ngFor=\"let room of allRooms\">\n  \n            <span *ngIf=\"room.guest._id == self_id\">\n                <a mat-list-item [routerLink]=\"['/main/chat/', room.chatroom_id]\">{{room.host.fname | titlecase}} {{room.host.lname | titlecase }}<span style=\"margin-left: 2%;\" [hidden]=\"room.read\" matBadge=\"!\"  matBadgeColor=\"warn\" matBadgeOverlap=\"false\"></span></a>\n            </span>\n            <span *ngIf=\"room.host._id == self_id\">\n                <a mat-list-item [routerLink]=\"['/main/chat/', room.chatroom_id]\">{{room.guest.fname|titlecase}} {{room.guest.lname | titlecase }}<span style=\"margin-left: 2%;\" [hidden]=\"room.read\" matBadge=\"!\"  matBadgeColor=\"warn\" matBadgeOverlap=\"false\"></span></a>\n            </span>\n          </span>\n        </mat-nav-list>\n      </mat-nav-list>\n    </mat-sidenav>\n    <mat-sidenav opened mode=\"side\" position=\"end\" >end content</mat-sidenav>\n    <router-outlet></router-outlet>\n  </mat-sidenav-container>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/chatbox/chatbox.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chatbox/chatbox.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chatbox_container\">\n  <div id=\"box\" #box class=\"message_display\">\n\n      <div *ngFor=\"let msg of roomData\">\n\n        <div *ngIf=\"msg.sender._id == self_id\" class=\"self_msg\">\n          <p>You said: {{msg.message}}</p>\n        </div>\n\n        <div *ngIf=\"msg.sender._id != self_id\" class=\"self_msg\">\n          <p>{{msg.sender.fname | titlecase }} said: {{msg.message}}</p>\n        </div>\n\n      </div>\n    </div>\n    \n    <div class=\"input_field\">\n      <form (submit)=\"sendMsg()\">\n        <input type=\"text\" name =\"msgToSend\" [(ngModel)]=\"msgToSend\" placeholder=\"Type message here..\">\n        <button type=\"submit\" class=\"btn btn-primary\">Send</button>\n      </form>\n    </div>\n  </div>    \n    \n      \n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/default/default.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/default/default.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"gym_container\">\n\n    <div class=\"title_container\">\n        <h1>{{gym.name}}</h1>\n        <p>{{gym.formatted_address}}</p>\n    </div>\n\n    <div class=\"card_container\">\n        <mat-card class=\"card shadow\" *ngFor=\"let member of members; let i = index\">\n            <mat-card-header>\n                <mat-card-title>{{member.fname | titlecase}} {{member.lname | titlecase}}</mat-card-title>\n                <mat-card-subtitle>{{member.gender | titlecase}}, {{getAge(member.dob)}} yrs</mat-card-subtitle>\n            </mat-card-header>\n            <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"filler\">\n            <mat-card-content>\n                <div class=\"card-div-container\">\n                <div class=\"card_info\">\n                <h5> fitGoals</h5>\n\n                <button mat-fab color=\"primary\" aria-label=\"Fitness goals\" (mouseenter)=\"hover(i, 'goals')\" (mouseleave)=\"hover(-1, null)\">\n                    <mat-icon>post_add</mat-icon>\n                 </button>\n                <div [hidden]=\"!(i == hoverIndex)\" class=\"hoverDiv shadow-lg\">\n                        <div [hidden]=\"!goalsDiv\" class=\"goals_info\">\n                            <h5>Fitness goals</h5>\n                            <p>You have {{member.ranking}} goal matches</p>\n                            <mat-chip-list>\n                                <span *ngFor=\"let pref of member.preference | keyvalue\">\n                                        <span *ngIf=\"(pref.key == 'weight_loss') && (pref.value == true)\"><mat-chip color=\"primary\" selected>Weight Loss</mat-chip></span>\n                                        <span *ngIf=\"(pref.key == 'cardio') && (pref.value == true)\"><mat-chip color=\"primary\" selected>Cardio</mat-chip></span>\n                                        <span *ngIf=\"(pref.key == 'endurance') && (pref.value == true)\"><mat-chip color=\"primary\" selected>Endurance</mat-chip></span>\n                                        <span *ngIf=\"(pref.key == 'flexibility') && (pref.value == true)\"><mat-chip color=\"primary\" selected>Flexibiliy</mat-chip></span>\n                                        <span *ngIf=\"(pref.key == 'genFit') && (pref.value == true)\"><mat-chip color=\"primary\" selected>General Fitness</mat-chip></span>\n                                        <span *ngIf=\"(pref.key == 'muscle') && (pref.value == true)\"><mat-chip color=\"primary\" selected>Muscle Building</mat-chip></span>\n                                        <span *ngIf=\"(pref.key == 'strength') && (pref.value == true)\"><mat-chip color=\"primary\" selected>Strength Training</mat-chip></span>\n                                </span>\n                            </mat-chip-list>\n                        </div>\n                        <div [hidden]=\"!scheduleDiv\" class=\"schedule_div\">\n                            <h5>Schedule</h5>\n                            <table class=\"table table-sm\">\n                                <thead>\n                                    <tr>\n                                        <th class=\"scope\">Mon</th>\n                                        <th class=\"scope\">Tues</th>\n                                        <th class=\"scope\">Wed</th>\n                                        <th class=\"scope\">Thu</th>\n                                        <th class=\"scope\">Fri</th>\n                                        <th class=\"scope\">Sat</th>\n                                        <th class=\"scope\">Sun</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr>\n                                        <td><span *ngIf=\"member.schedule.mon\">{{member.schedule.mon | time24to12Transform}}</span></td>\n                                        <td><span *ngIf=\"member.schedule.tues\">{{member.schedule.tues | time24to12Transform}}</span></td>\n                                        <td><span *ngIf=\"member.schedule.wed\">{{member.schedule.wed | time24to12Transform}}</span></td>\n                                        <td><span *ngIf=\"member.schedule.thurs\">{{member.schedule.thurs | time24to12Transform}}</span></td>\n                                        <td><span *ngIf=\"member.schedule.fri\">{{member.schedule.fri | time24to12Transform}}</span></td>\n                                        <td><span *ngIf=\"member.schedule.sat\">{{member.schedule.sat | time24to12Transform}}</span></td>\n                                        <td><span *ngIf=\"member.schedule.sun\">{{member.schedule.sun | time24to12Transform}}</span></td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                </div>\n            </div>\n            <div class=\"schedule_info\">\n                <h5>schedule</h5>\n\n                <button mat-fab color=\"primary\" aria-label=\"Fitness goals\" (mouseenter)=\"hover(i, 'schedule')\" (mouseleave)=\"hover(-1, null)\">\n                  <mat-icon>calendar_today</mat-icon>\n                </button>\n            </div>\n        </div>\n        <div class=\"mt-5 ml-5\">\n                <button mat-stroked-button color=\"primary\" (click)=\"createChat(member._id)\">CHAT</button>\n        </div>\n            </mat-card-content>\n\n        </mat-card>\n    </div>\n</div>\n\n<div hidden=\"true\" id=\"map\"></div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/edit-info/edit-info.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/edit-info/edit-info.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"edit_info_container\">\n  <div class=\"some_container\">\n    <div class=\"info_form_container\">\n        <h5>Update Personal Information</h5>\n\n        <div class=\"form-goup\">\n          <form (submit)=\"changeInfo()\">\n            <div class=\"col\">\n              <label for=\"fname\">First Name</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]='self.fname' name=\"fname\" placeholder=\"First name\">\n            </div>\n            <div class=\"col\">\n              <label for=\"lname\">Last Name</label>\n              <input type=\"text\" class=\"form-control\" name=\"lname\" [(ngModel)]='self.lname' placeholder=\"Last name\">\n            </div>\n            <div class=\"col\">\n              <label for=\"email\">Email</label>\n              <input type=\"email\" class=\"form-control\" [(ngModel)]='self.email'  name=\"email\" placeholder=\"Email\">\n            </div>\n             <button type=\"submit\" class=\"btn btn-primary\" name=\"button\">Submit</button>\n          </form>\n        </div>\n    </div>\n\n    <div class=\"edit_password_container\">\n      <h5>Update Password</h5>\n      <p>It's good to use a strong and unique password.</p>\n\n      <form (submit)=\"changePassword()\">\n        <label for=\"current\">Current Password</label>\n        <input type=\"password\" name=\"current\" class=\"form-control\" [(ngModel)]=\"password.old\" placeholder=\"Password\"><br>\n\n        <label for=\"new\">New Password</label>\n        <input type=\"password\" name=\"new\" #password=\"ngModel\" pattern=\"^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$\" [(ngModel)]=\"password.new\" class=\"form-control\" placeholder=\"New Password\"><br>\n        <div class=\"alert alert-warning\" *ngIf=\" (password.invalid && (password.dirty || password.touched))\">\n           <span *ngIf=\"password.errors.required\">New password is required</span>\n           <span *ngIf=\"password.errors?.pattern\">New password must be at least 8 characters and contain 1 letter, 1 number.</span>\n       </div>\n\n        <label for=\"new\">Confirm Password</label>\n        <input type=\"password\" name=\"confirm\" class=\"form-control\" placeholder=\"New Password\"><br>\n        <button type=\"submit\" class=\"btn btn-success\">Change Password</button>\n      </form>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper fadeInDown\">\n  <div id=\"formContent\">\n    <!-- Tabs Titles -->\n\n    <!-- Login Form -->\n    <form (submit)=\"loginUser()\">\n      <input type=\"text\" id=\"login\" class=\"fadeIn second\" name=\"username\" [(ngModel)]=\"username\" placeholder=\"username\">\n      <input type=\"password\" id=\"password\" class=\"fadeIn third\" name=\"password\" [(ngModel)]=\"password\" placeholder=\"password\">\n      <input type=\"submit\" class=\"fadeIn fourth\" value=\"Log In\">\n    </form>\n\n    <!-- Remind Passowrd -->\n    <div id=\"formFooter\">\n      <a class=\"underlineHover\" [routerLink]=\"['/register']\">No account? Register Here</a>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/main.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/main.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"index_container\" [class.is-mobile]=\"mobileQuery.matches\">\n  <mat-toolbar color=\"primary\" class=\"toolbar\">\n    <mat-toolbar-row>\n        <button mat-icon-button style=\"outline: none;\" (click)=\"sidebar.toggle()\"><mat-icon>menu</mat-icon></button>\n        <h1 class=\"project_name\">fitFriends</h1>\n        <span class=\"spacer\"></span>\n        <span style=\"margin-right: 2%;\">Welcome, {{self.fname | titlecase}}!</span>\n    </mat-toolbar-row>\n  </mat-toolbar>\n\n  <mat-sidenav-container class=\"sidebar_container\" [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\n    <mat-sidenav [opened]=\"!mobileQuery.matches\" #sidebar mode='side' [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\">\n      <mat-nav-list>\n        <a mat-list-item [routerLink]=\"['/main', 'default']\"><mat-icon>fitness_center</mat-icon><span style=\"margin: 0 2%;\">Your Gym</span></a>\n        <a mat-list-item [routerLink]=\"['/main', 'chat']\"><mat-icon>message</mat-icon><span style=\"margin: 0 2%;\">Messages</span><span style=\"margin-left: 2%;\" [hidden]=\"!unread\" matBadge=\"!\"  matBadgeColor=\"warn\" matBadgeOverlap=\"false\"></span></a>\n        <a mat-list-item [routerLink]=\"['/main', 'preferences']\"><mat-icon>assistant</mat-icon><span style=\"margin: 0 2%;\">Preferences</span></a>\n        <a mat-list-item [routerLink]=\"['/main', 'edit_info']\"><mat-icon>account_circle</mat-icon><span style=\"margin: 0 2%;\">Account Info</span></a>\n        <a mat-list-item (click)=\"logout()\">Logout</a>\n      </mat-nav-list>\n    </mat-sidenav>\n    <router-outlet></router-outlet>\n  </mat-sidenav-container>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/map/map.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/map/map.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"map_search\">\n  <!-- <div class=\"form-group\">\n    <h3>Find your gym by search bar</h3>\n    <p>Includes all surround fitness centers</p>\n    <p>(You can drag the center place marker and it'll redo search in the radius)</p>\n    <label><b>Enter Address</b></label>\n     <input type=\"text\" class=\"form-control\" (keydown.enter)=\"$event.preventDefault()\" placeholder=\"Search Nearest Location\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" search>\n  </div>\n\n  <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [zoom]=\"zoom\" (mapReady)=\"setMapData($event)\">\n      <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" [markerDraggable]=\"true\"\n        (dragEnd)=\"markerDragEnd($event)\"></agm-marker>\n\n      <ng-container *ngFor=\"let gym of nearbyGyms\">\n        <agm-marker [latitude]=\"gym.lat\" [longitude]=\"gym.lng\">\n          <agm-info-window>\n            <div class=\"info_window\">\n                <h5 class=\"mb-0\"><a [routerLink]=\"['/main', 'gym', gym.place_id]\">{{gym.name}}</a></h5><br>\n                <ng-container *ngIf=\"self.default_gym != gym.place_id\"><button (click)=\"setDefaultGym(gym.place_id)\" class=\"btn btn-success mt-0\">Set Default</button></ng-container>\n                <p class=\"mt-2\">{{gym.address}}</p>\n            </div>\n          </agm-info-window>\n        </agm-marker>\n      </ng-container>\n\n  </agm-map> -->\n\n  <label><b>Enter Address</b></label>\n  <input type=\"text\" class=\"form-control\" (keydown.enter)=\"$event.preventDefault()\" placeholder=\"Search Nearest Location\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" #search>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/preference/preference.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/preference/preference.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pref_container\">\n\n    <!-- Set Default Gym Input -->\n    <mat-accordion class=\"example-headers-align\">\n      <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle>\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n              <mat-icon>fitness_center</mat-icon>Set Default Gym\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n        <mat-panel-description>\n            *Input name of your gym\n        </mat-panel-description>\n        <mat-form-field>\n            <input matNativeControl type=\"text\" class=\"form-control\" (keydown.enter)=\"$event.preventDefault()\" placeholder=\"search...\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" #search>\n        </mat-form-field>\n\n        <div id=\"gym_info\" [hidden]=\"!show\" [style.background]='img' style=\"background-position: 50%;\" class=\"place_container\">\n            <div class=\"place_info\">\n                <h1 class=\"gym_title text-center\"><a href=\"{{gym.url}}\">{{gym.name}}</a></h1>\n                <div class=\"place_info align-top d-inline-block\">\n                    <p class=\"mt-3\">Address: {{gym.formatted_address}}</p>\n                    <p>Phone: {{gym.formatted_phone_number}}</p>\n                    <span [hidden]=\"gym.place_id == self.default_gym\">\n                        <button mat-raised-button color=\"accent\" (click)=\"setDefaultGym(gym.place_id)\">Set Default</button>\n                    </span>\n                    <span [hidden]=\"gym.place_id != self.default_gym\">\n                        <div class=\"mt-3\">\n                            <p><span style=\"color: red\">This is your default gym</span></p>\n                           <p class=\"mt-3\"><span style=\"color: white\">Click <button mat-flat-button color=\"warn\" [routerLink]=\"['/main','default']\">Here</button> to go to your gym page</span></p>\n                        </div>\n                    </span>\n                </div>\n            </div>    \n        </div>\n        <mat-action-row>\n          <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n        </mat-action-row>\n      </mat-expansion-panel>\n    \n      <!-- Set Gym Schedule -->\n      <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle>\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n              <mat-icon>calendar_today</mat-icon>Set Gym Schedule\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n    \n        <mat-panel-description>\n            *Input the time for each workout day\n        </mat-panel-description>\n      \n        <!-- Gym Schedule Table -->\n        <div class=\"table_container\">\n            <form id=\"schedule\" (submit)=\"updateSchedule()\">\n                  <table class=\"table\">\n                    <thead>\n                      <tr>\n                        <th scope=\"col\">Day</th>\n                        <th scope=\"col\">Time</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr>\n                        <th scope=\"row\">Monday</th>\n                        <td><input atp-time-picker [(ngModel)]=\"schedule.mon\" name=\"mon\"></td>\n                      </tr>\n                      <tr>\n                        <th scope=\"row\">Tuesday</th>\n                        <td><input atp-time-picker [(ngModel)]=\"schedule.tues\" name=\"tues\"></td>\n                      </tr>\n                      <tr>\n                        <th scope=\"row\">Wednesday</th>\n                        <td><input atp-time-picker [(ngModel)]=\"schedule.wed\" name=\"wed\"></td>\n                      </tr>\n                      <tr>\n                        <th scope=\"row\">Thursday</th>\n                        <td><input atp-time-picker [(ngModel)]=\"schedule.thurs\" name=\"thurs\"></td>\n                      </tr>\n                      <tr>\n                        <th scope=\"row\">Friday</th>\n                        <td><input atp-time-picker [(ngModel)]=\"schedule.fri\" name=\"fri\"></td>\n                      </tr>\n                      <tr>\n                        <th scope=\"row\">Saturday</th>\n                        <td><input atp-time-picker [(ngModel)]=\"schedule.sat\" name=\"sat\"></td>\n                      </tr>\n                      <tr>\n                        <th scope=\"row\">Sunday</th>\n                        <td><input atp-time-picker [(ngModel)]=\"schedule.sun\" name=\"sun\"></td>\n                      </tr>\n                    </tbody>\n                  </table>\n                <button mat-stroked-button color=\"primary\" type=\"submit\">Update</button>\n              </form>\n        </div>\n    \n        <mat-action-row>\n        \n          <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n          <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n        </mat-action-row>\n      </mat-expansion-panel>\n    \n      <!-- Set Goals -->\n      <mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" hideToggle>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n                <mat-icon>poll</mat-icon> Set Workout Goals\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n\n           <form (submit)=\"updateGoals()\">\n             <div class=\"gender_div\">\n                <h5>Would you prefer a male or female gym partner?</h5>\n                <input type=\"hidden\" [(value)]=\"preference.user_id\">\n                <mat-form-field>\n                  <mat-label>Gender preference</mat-label>\n                  <mat-select required [(value)]=\"preference.gender\">\n                    <mat-option>--</mat-option>\n                    <mat-option value=\"male\">Male</mat-option>\n                    <mat-option value=\"female\">Female</mat-option>\n                    <mat-option value=\"none\">No Preference</mat-option>\n                  </mat-select>\n                  <!-- <mat-error *ngIf=\"selectFormControl.hasError('required') && preference.gender === ''\">Please choose a gender</mat-error> -->\n                </mat-form-field>\n             </div>\n\n             <div class=\"goals_container\">\n                <mat-panel-description>\n                    *Select all that applies, minimum of 1\n                </mat-panel-description>\n                <label><mat-checkbox style=\"line-height: 50px !important; margin-left: 10px;\" color=\"primary\" name=\"weight_loss\" [(ngModel)]=\"preference.weight_loss\">Weight Loss</mat-checkbox></label>\n                <label><mat-checkbox style=\"line-height: 50px !important;margin-left: 10px;\" color=\"primary\"  name=\"cardio\" [(ngModel)]=\"preference.cardio\">Cardio Fitness</mat-checkbox></label>\n                <label><mat-checkbox style=\"line-height: 50px !important;margin-left: 10px;\" color=\"primary\"  name=\"endurance\" [(ngModel)]=\"preference.endurance\">Endurance</mat-checkbox></label>\n                <label><mat-checkbox style=\"line-height: 50px !important;margin-left: 10px;\" color=\"primary\"  name=\"flexibility\" [(ngModel)]=\"preference.flexibility\">Flexibility</mat-checkbox></label>\n                <label><mat-checkbox style=\"line-height: 50px !important;margin-left: 10px;\" color=\"primary\"  name=\"muscle\" [(ngModel)]=\"preference.muscle\">Building Muscle</mat-checkbox></label>\n                <label><mat-checkbox style=\"line-height: 50px !important;margin-left: 10px;\" color=\"primary\"  name=\"strength\" [(ngModel)]=\"preference.strength\">Strength Training</mat-checkbox></label>\n                <label><mat-checkbox style=\"line-height: 50px !important;margin-left: 10px;\" color=\"primary\"  name=\"genFit\" [(ngModel)]=\"preference.genFit\">General Health</mat-checkbox></label>\n             </div>\n             <button style=\"margin: 0 3%;\" mat-stroked-button type=\"submit\" color=\"primary\">Update</button>\n           </form>\n      \n          <mat-action-row>\n            <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n          </mat-action-row>\n        </mat-expansion-panel>\n    \n    </mat-accordion>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"wrapper fadeInDown\">\n  <div id=\"formContent\">\n    <!-- Tabs Titles -->\n\n    <!-- REgister Form -->\n\n    <form (submit)=\"addUser()\">\n      <input type=\"text\" id=\"firstName\" #firstName=\"ngModel\" required minlength=\"2\" class=\"fadeIn second\" name=\"newUser.fname\" [(ngModel)]=\"newUser.fname\" placeholder=\"first name\">\n      <div class=\"alert alert-warning\" *ngIf=\" (firstName.invalid && (firstName.dirty || firstName.touched))\">\n         <span *ngIf=\"firstName.errors.required\">First name is required</span>\n         <span *ngIf=\"firstName.errors.minlength\">First name must be at least 2 characters</span>\n     </div>\n\n      <input type=\"text\" id=\"lastName\" #lastName=\"ngModel\" required minlength=\"2\" class=\"fadeIn second\" name=\"newUser.lname\" [(ngModel)]=\"newUser.lname\" placeholder=\"last name\">\n      <div class=\"alert alert-warning\" *ngIf=\" (lastName.invalid && (lastName.dirty || lastName.touched))\">\n         <span *ngIf=\"lastName.errors.required\">Last name is required</span>\n         <span *ngIf=\"lastName.errors.minlength\">Last name must be at least 2 characters</span>\n     </div>\n\n      <input type=\"text\" required minlength=\"3\" id=\"username\" #username=\"ngModel\" class=\"fadeIn second\" name=\"newUser.username\" [(ngModel)]=\"newUser.username\" placeholder=\"username\">\n      <div class=\"alert alert-warning\" *ngIf=\" (username.invalid && (username.dirty || username.touched))\">\n         <span *ngIf=\"username.errors.required\">Username is required</span>\n         <span *ngIf=\"username.errors.minlength\">Username must be at least 3 characters</span>\n     </div>\n\n      <input type=\"text\" id=\"email\" #email=\"ngModel\" required pattern=\"^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\\.[a-zA-Z]+$\" required class=\"fadeIn second\" name=\"newUser.email\" [(ngModel)]=\"newUser.email\" placeholder=\"email\">\n      <div class=\"alert alert-warning\" *ngIf=\" (email.invalid && (email.dirty || email.touched))\">\n         <span *ngIf=\"email.errors.required\">Email is required</span>\n         <span *ngIf=\"email.errors?.pattern\">Enter a valid email</span>\n     </div>\n\n      <input type=\"password\" id=\"password\" #password=\"ngModel\" required pattern=\"^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$\" class=\"fadeIn second\" name=\"newUser.password\" [(ngModel)]=\"newUser.password\" placeholder=\"password\">\n      <div class=\"alert alert-warning\" *ngIf=\" (password.invalid && (password.dirty || password.touched))\">\n         <span *ngIf=\"password.errors.required\">Password is required</span>\n         <span *ngIf=\"password.errors?.pattern\">Password must be at least 8 characters and contain 1 letter, 1 number.</span>\n     </div>\n\n      <label id=\"dob_label\" for=\"newUser.dob\" class=\"fadeIn second\">Date of Birth</label>\n      <input type=\"date\" required id=\"dob\" #dob=\"ngModel\" class=\"fadeIn second\" name=\"newUser.dob\" [(ngModel)]=\"newUser.dob\"><br>\n      <div class=\"alert alert-warning\" *ngIf=\" (dob.invalid && (dob.dirty || dob.touched))\">\n         <span *ngIf=\"dob.errors.required\">Must enter a birthday</span>\n     </div>\n\n      <label id=\"gender_label\" for=\"gender\" class=\"fadeIn second\">Select gender: </label>\n      <input type=\"radio\" (click)=\"genderSelected()\" [(ngModel)]=\"newUser.gender\" name=\"gender\" value=\"male\" class=\"fadeIn second\"><label for=\"gender\" class=\"fadeIn second\">Male</label>\n      <input type=\"radio\" (click)=\"genderSelected()\" [(ngModel)]=\"newUser.gender\" name=\"gender\" value=\"female\" class=\"fadeIn second\"><label for=\"gender\" class=\"fadeIn second\">Female</label>\n      <input type=\"radio\" (click)=\"genderSelected()\" [(ngModel)]=\"newUser.gender\" name=\"gender\" value=\"other\" class=\"fadeIn second\"><label for=\"gender\" class=\"fadeIn second\">Other</label>\n\n      <input type=\"submit\" [disabled]=\"(firstName.invalid || lastName.invalid || email.invalid || password.invalid || dob.invalid || !selected)\" class=\"fadeIn fourth\" value=\"Register\">\n    </form>\n\n    <div id=\"formFooter\">\n      <a class=\"underlineHover\" [routerLink]=\"['/login']\">Already have an account? Sign in here</a>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/welcome/welcome.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/welcome/welcome.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"index_container\">\n  <nav class=\"navbar navbar-expand-sm navbar-dark\" style=\"background:transparent\">\n    <a class=\"navbar-brand\" [routerLink]=\"['/']\">\n      <img src=\"../assets/images/friendicon.png\" style=\"height: 30px; width: 30px;\" alt=\"friend icon\">\n      fitFriends</a>\n      <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\".navbar-collapse\" data-target=\"#navbarText\" aria-controls=\"navbarText\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarText\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n        </li>\n      </ul>\n\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/about']\">About</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n\n  <div role=\"main\" class=\"inner_cover\">\n    <div class=\"info_container\">\n      <h1 class=\"cover-heading\">Get Connected</h1>\n      <p class=\"lead\">fitFriends is dedicated to gym goers who needs to find comforting individuals with similar goals and schedules.</p>\n      <p class=\"lead\">Connect with members that goes to your gym who shares your goals and preferences.</p>\n      <p class=\"lead\">\n        <a [routerLink]=\"['/about']\" id=\"learn_btn\" class=\"btn btn-lg btn-info\">Learn More!</a>\n        <a [routerLink]=\"['/login']\" class=\"btn btn-lg btn-info\">Login</a>\n        <a [routerLink]=\"['/register']\" class=\"btn btn-lg btn-info\">Register</a>\n      </p>\n\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inner_cover{\n  width: 100%;\n  margin: 0 auto;\n}\n.info_container{\n  width: 50%;\n  margin: auto;\n  padding-top: 130px;\n  color: white;\n}\n.index_container {\n  background: -webkit-gradient( linear, left top, left bottom, from(rgba(0, 0, 0, 0.80)), to(rgba(0, 0, 0, 0.80)) ), url('https://images.unsplash.com/photo-1536922246289-88c42f957773?ixlib=rb-1.2.1&auto=format&fit=crop&w=1380&q=80');\n  background: linear-gradient( rgba(0, 0, 0, 0.80), rgba(0, 0, 0, 0.80) ), url('https://images.unsplash.com/photo-1536922246289-88c42f957773?ixlib=rb-1.2.1&auto=format&fit=crop&w=1380&q=80');\n  min-height: 100vh;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n\n}\n.more_container {\n  width: 80%;\n  margin: 5% 10%;\n  display: inline-block;\n  color: white;\n}\n.mission_container {\n  width: 65%;\n  margin: 0 auto;\n}\n.mission_title {\n  text-align: center;\n}\n.about_container{\n  margin: 5% auto;\n  width: 65%;\n}\n.about_container h3 {\n  margin-top: 5%;\n}\n.reg_container{\n  width: 80%;\n  margin: 5% 10%;\n}\n.reg_content {\n  width: 100%;\n  text-align: center;\n}\nbutton{\n  margin: 0 2%;\n}\n.warning {\n  color: red;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLHNPQUE0TDtFQUE1TCw0TEFBNEw7RUFDNUwsaUJBQWlCO0VBQ2pCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCOztBQUV4QjtBQUdBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsY0FBYztBQUNoQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtBQUNaO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsY0FBYztBQUNoQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlubmVyX2NvdmVye1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uaW5mb19jb250YWluZXJ7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZy10b3A6IDEzMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5pbmRleF9jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIHJnYmEoMCwgMCwgMCwgMC44MCksIHJnYmEoMCwgMCwgMCwgMC44MCkgKSwgdXJsKCdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUzNjkyMjI0NjI4OS04OGM0MmY5NTc3NzM/aXhsaWI9cmItMS4yLjEmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xMzgwJnE9ODAnKTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxufVxuXG5cbi5tb3JlX2NvbnRhaW5lciB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogNSUgMTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5taXNzaW9uX2NvbnRhaW5lciB7XG4gIHdpZHRoOiA2NSU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLm1pc3Npb25fdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hYm91dF9jb250YWluZXJ7XG4gIG1hcmdpbjogNSUgYXV0bztcbiAgd2lkdGg6IDY1JTtcbn1cbi5hYm91dF9jb250YWluZXIgaDMge1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cbi5yZWdfY29udGFpbmVye1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDUlIDEwJTtcbn1cbi5yZWdfY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5idXR0b257XG4gIG1hcmdpbjogMCAyJTtcbn1cbi53YXJuaW5nIHtcbiAgY29sb3I6IHJlZDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html"),
        styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _preference_preference_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./preference/preference.component */ "./src/app/preference/preference.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _default_default_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./default/default.component */ "./src/app/default/default.component.ts");
/* harmony import */ var _edit_info_edit_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./edit-info/edit-info.component */ "./src/app/edit-info/edit-info.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _chatbox_chatbox_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./chatbox/chatbox.component */ "./src/app/chatbox/chatbox.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");















const routes = [
    { path: '', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: "register", component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: "main", component: _main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]], children: [
            { path: 'preferences', component: _preference_preference_component__WEBPACK_IMPORTED_MODULE_8__["PreferenceComponent"] },
            { path: 'map', component: _map_map_component__WEBPACK_IMPORTED_MODULE_9__["MapComponent"] },
            { path: 'default', component: _default_default_component__WEBPACK_IMPORTED_MODULE_10__["DefaultComponent"] },
            { path: "edit_info", component: _edit_info_edit_info_component__WEBPACK_IMPORTED_MODULE_11__["EditInfoComponent"] },
            { path: 'chat', component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_12__["ChatComponent"], children: [
                    { path: ':room_id', component: _chatbox_chatbox_component__WEBPACK_IMPORTED_MODULE_13__["ChatboxComponent"] }
                ] }
        ] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\n  margin: 0;\n  padding: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/index.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var amazing_time_picker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! amazing-time-picker */ "./node_modules/amazing-time-picker/amazing-time-picker.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _time24to12_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./time24to12.pipe */ "./src/app/time24to12.pipe.ts");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _token_intercept_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./token-intercept.service */ "./src/app/token-intercept.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _preference_preference_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./preference/preference.component */ "./src/app/preference/preference.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _default_default_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./default/default.component */ "./src/app/default/default.component.ts");
/* harmony import */ var _edit_info_edit_info_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./edit-info/edit-info.component */ "./src/app/edit-info/edit-info.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _chatbox_chatbox_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./chatbox/chatbox.component */ "./src/app/chatbox/chatbox.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");











































const config = { url: 'http://localhost:4444', options: {} };
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_23__["AppComponent"],
            _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_24__["WelcomeComponent"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_29__["AboutComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_30__["RegisterComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_31__["LoginComponent"],
            _main_main_component__WEBPACK_IMPORTED_MODULE_32__["MainComponent"],
            _time24to12_pipe__WEBPACK_IMPORTED_MODULE_20__["Time24to12Format"],
            _preference_preference_component__WEBPACK_IMPORTED_MODULE_33__["PreferenceComponent"],
            _map_map_component__WEBPACK_IMPORTED_MODULE_36__["MapComponent"],
            _default_default_component__WEBPACK_IMPORTED_MODULE_37__["DefaultComponent"],
            _edit_info_edit_info_component__WEBPACK_IMPORTED_MODULE_38__["EditInfoComponent"],
            _chat_chat_component__WEBPACK_IMPORTED_MODULE_39__["ChatComponent"],
            _chatbox_chatbox_component__WEBPACK_IMPORTED_MODULE_40__["ChatboxComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_22__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_34__["NgbModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_21__["MatBadgeModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__["MatChipsModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_42__["MatExpansionModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_41__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
            amazing_time_picker__WEBPACK_IMPORTED_MODULE_16__["AmazingTimePickerModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__["SocketIoModule"].forRoot(config),
            _agm_core__WEBPACK_IMPORTED_MODULE_35__["AgmCoreModule"].forRoot({
                apiKey: "AIzaSyCC4s4L_Am_LbC23XXeY59fP5Jh8zcEQIU",
                libraries: ['geometry', 'places']
            })
        ],
        providers: [_user_service__WEBPACK_IMPORTED_MODULE_27__["UserService"], _http_service__WEBPACK_IMPORTED_MODULE_28__["HttpService"], _auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"], {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                useClass: _token_intercept_service__WEBPACK_IMPORTED_MODULE_26__["TokenInterceptService"],
                multi: true
            }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_23__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    canActivate() {
        if (this._authService.loggedIn()) {
            return true;
        }
        else {
            this._router.navigate(['/login']);
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let AuthService = class AuthService {
    constructor(_http) {
        this._http = _http;
    }
    registerUser(user) {
        return this._http.post('/registerUser', user);
    }
    loginUser(user) {
        return this._http.post('/loginUser', user);
    }
    loggedIn() {
        return !!localStorage.getItem('token');
    }
    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        localStorage.removeItem('gym');
    }
    getToken() {
        return localStorage.getItem('token');
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/chat.service.ts":
/*!*********************************!*\
  !*** ./src/app/chat.service.ts ***!
  \*********************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let ChatService = class ChatService {
    constructor(socket, http) {
        this.socket = socket;
        this.http = http;
        this.currentChat = this.socket.fromEvent('currentChat');
        this.chatrooms = this.socket.fromEvent('allChatrooms');
    }
    ngOnInit() {
    }
    newChat(data) {
        return this.http.post('/createChat', data);
    }
    getChatroom(room_id) {
        return this.http.get('/getRoom/' + room_id);
    }
    postMsg(data) {
        return this.http.post('/postMsg', data);
    }
    chatCheck(data) {
        return this.http.post('/checkChat', data);
    }
};
ChatService.ctorParameters = () => [
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ChatService);



/***/ }),

/***/ "./src/app/chat/chat.component.css":
/*!*****************************************!*\
  !*** ./src/app/chat/chat.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".msg_container, .msg_sidenav{\n    height: 100%;\n}\n.users_list{\n    width: 300px;\n    overflow: hidden;\n}\n.users_list h1{\n    margin: 2% 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXNnX2NvbnRhaW5lciwgLm1zZ19zaWRlbmF2e1xuICAgIGhlaWdodDogMTAwJTtcbn1cbi51c2Vyc19saXN0e1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnVzZXJzX2xpc3QgaDF7XG4gICAgbWFyZ2luOiAyJSA1JTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_sockets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sockets.service */ "./src/app/sockets.service.ts");



let ChatComponent = class ChatComponent {
    constructor(socketsService) {
        this.socketsService = socketsService;
    }
    ngOnInit() {
        this.self_id = localStorage.getItem('id');
        this._rooms = this.socketsService.chatrooms.subscribe(data => {
            this.allRooms = this.checkUnreadChats(data);
        });
        this.socketsAllChats();
    }
    ngOnDestroy() {
        this._rooms.unsubscribe();
    }
    socketsAllChats() {
        this.socketsService.getAllChats(this.self_id);
    }
    setRead(data) {
        this.socketsService.setRead(data);
    }
    checkUnreadChats(array) {
        for (let i = 0; i < array.length; i++) {
            if (array[i]['msg']) {
                let msg = array[i]['msg'];
                for (let j = msg.length - 1; j >= 0; j--) {
                    if (msg[j]['sender']['_id'] != this.self_id && msg[j]['read'] == false) {
                        array[i]['read'] = false;
                        break;
                    }
                    else if (msg[j]['sender']['_id'] != this.self_id && msg[j]['read'] == true) {
                        array[i]['read'] = true;
                        break;
                    }
                    else {
                        continue;
                    }
                }
                if (array[i]['read'] == null) {
                    array[i]['read'] = true;
                }
            }
        }
        return array;
    }
};
ChatComponent.ctorParameters = () => [
    { type: src_app_sockets_service__WEBPACK_IMPORTED_MODULE_2__["SocketsService"] }
];
ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat',
        template: __webpack_require__(/*! raw-loader!./chat.component.html */ "./node_modules/raw-loader/index.js!./src/app/chat/chat.component.html"),
        styles: [__webpack_require__(/*! ./chat.component.css */ "./src/app/chat/chat.component.css")]
    })
], ChatComponent);



/***/ }),

/***/ "./src/app/chatbox/chatbox.component.css":
/*!***********************************************!*\
  !*** ./src/app/chatbox/chatbox.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chatbox_container {\n  left: 300px;\n  overflow: hidden;\n  height: 100%;\n  width: 50%;\n}\n.message_display {\n  height: 80%;\n  border: 2px solid black;\n  overflow-y: scroll;\n  margin: 2%;\n}\n.eachMsg p {\n  margin: 2%;\n}\n.input_field, .input_field input, .input_field button{\n  margin: 2%\n}\n.input_field input {\n  width: 75%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdGJveC9jaGF0Ym94LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixVQUFVO0FBQ1o7QUFDQTtFQUNFLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjtBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRTtBQUNGO0FBRUE7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9jaGF0Ym94L2NoYXRib3guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGF0Ym94X2NvbnRhaW5lciB7XG4gIGxlZnQ6IDMwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA1MCU7XG59XG4ubWVzc2FnZV9kaXNwbGF5IHtcbiAgaGVpZ2h0OiA4MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIG1hcmdpbjogMiU7XG59XG5cbi5lYWNoTXNnIHAge1xuICBtYXJnaW46IDIlO1xufVxuXG4uaW5wdXRfZmllbGQsIC5pbnB1dF9maWVsZCBpbnB1dCwgLmlucHV0X2ZpZWxkIGJ1dHRvbntcbiAgbWFyZ2luOiAyJVxufVxuXG4uaW5wdXRfZmllbGQgaW5wdXQge1xuICB3aWR0aDogNzUlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/chatbox/chatbox.component.ts":
/*!**********************************************!*\
  !*** ./src/app/chatbox/chatbox.component.ts ***!
  \**********************************************/
/*! exports provided: ChatboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatboxComponent", function() { return ChatboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _sockets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sockets.service */ "./src/app/sockets.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ChatboxComponent = class ChatboxComponent {
    constructor(socketsService, _router, _route) {
        this.socketsService = socketsService;
        this._router = _router;
        this._route = _route;
    }
    ngOnInit() {
        this.self_id = localStorage.getItem('id');
        this._route.params.subscribe((params) => {
            this.room_id = (params['room_id']);
        });
        this._router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                this.currentRoom(this.room_id);
            }
        });
        this._room = this.socketsService.currentRoom.subscribe(data => {
            data['msg'] = this.setMsgRead(data['msg']);
            this.roomData = data['msg'];
            this.setRead(data);
        });
        this.currentRoom(this.room_id);
    }
    ngOnDestroy() {
        this._room.unsubscribe();
    }
    currentRoom(id) {
        this.socketsService.getChatroom(id);
    }
    sendMsg() {
        this.socketsService.postMsg({ chatroom_id: this.room_id, msg: this.msgToSend, sender_id: localStorage.getItem('id') });
        this.msgToSend = '';
    }
    setRead(data) {
        data['self_id'] = this.self_id;
        this.socketsService.setRead(data);
    }
    setMsgRead(array) {
        if (array) {
            let i = array.length - 1;
            while (i >= 0) {
                if (array[i]['sender']['_id'] != this.self_id && array[i]['read'] == false) {
                    array[i]['read'] = true;
                    i--;
                }
                else if (array[i]['sender']['_id'] != this.self_id && array[i]['read'] == true) {
                    return array;
                }
                else {
                    i--;
                }
            }
            return array;
        }
    }
};
ChatboxComponent.ctorParameters = () => [
    { type: _sockets_service__WEBPACK_IMPORTED_MODULE_2__["SocketsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ChatboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chatbox',
        template: __webpack_require__(/*! raw-loader!./chatbox.component.html */ "./node_modules/raw-loader/index.js!./src/app/chatbox/chatbox.component.html"),
        styles: [__webpack_require__(/*! ./chatbox.component.css */ "./src/app/chatbox/chatbox.component.css")]
    })
], ChatboxComponent);



/***/ }),

/***/ "./src/app/default/default.component.css":
/*!***********************************************!*\
  !*** ./src/app/default/default.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap');\n\n\n.title_container{\n    width: 100%;\n    margin: 2%;\n}\n\n\n.card {\n    width: 400px;\n    display: inline-block;\n    vertical-align: top;\n    margin: 2%\n}\n\n\n.card_info, .schedule_info {\n    height: 75px;\n    width: 45%;\n    display: inline-block;\n    vertical-align: top;\n    margin: 1% auto;\n}\n\n\n.card_info button, .schedule_info button {\n    margin-top: 5%;\n}\n\n\n.hoverDiv {\n    height: 200px;\n    width: 95%;\n    margin: -80% 0 0 -6%;\n    position: absolute;\n    z-index: 5;\n    background: rgba(255, 255, 255, 0.8); \n    border: 1px solid black;\n    border-radius: 10px;\n\n}\n\n\n/* .mat-fab, .card_info h5, .schedule_info h5 {\n    margin-left: 20%;\n} */\n\n\n.card-div-container{\n    text-align: center;\n}\n\n\n.card_info h5, .schedule_info h5{\n    color: #673AB7;\n}\n\n\n.goals_info , .schedule_div{\n    margin: 2%;\n}\n\n\n.schedule_div h5 {\n    margin-top: 4%;\n}\n\n\n.schedule_div td {\n    width: 13%;\n}\n\n\n@media only screen and (max-width: 401px){\n    .card {\n        width: 95%;\n        height: auto !important;\n    }\n    .card_info, .schedule_info{\n        height: auto !important;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVmYXVsdC9kZWZhdWx0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0ZBQWdGOzs7QUFHaEY7SUFDSSxXQUFXO0lBQ1gsVUFBVTtBQUNkOzs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CO0FBQ0o7OztBQUNBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7OztBQUNBO0lBQ0ksY0FBYztBQUNsQjs7O0FBQ0E7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLG9DQUFvQztJQUNwQyx1QkFBdUI7SUFDdkIsbUJBQW1COztBQUV2Qjs7O0FBQ0E7O0dBRUc7OztBQUVIO0lBQ0ksa0JBQWtCO0FBQ3RCOzs7QUFDQTtJQUNJLGNBQWM7QUFDbEI7OztBQUVBO0lBQ0ksVUFBVTtBQUNkOzs7QUFDQTtJQUNJLGNBQWM7QUFDbEI7OztBQUNBO0lBQ0ksVUFBVTtBQUNkOzs7QUFHQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksdUJBQXVCO0lBQzNCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9kZWZhdWx0L2RlZmF1bHQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Sm9zZWZpbitTYW5zJmRpc3BsYXk9c3dhcCcpO1xuXG5cbi50aXRsZV9jb250YWluZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAyJTtcbn1cblxuLmNhcmQge1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBtYXJnaW46IDIlXG59XG4uY2FyZF9pbmZvLCAuc2NoZWR1bGVfaW5mbyB7XG4gICAgaGVpZ2h0OiA3NXB4O1xuICAgIHdpZHRoOiA0NSU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgbWFyZ2luOiAxJSBhdXRvO1xufVxuLmNhcmRfaW5mbyBidXR0b24sIC5zY2hlZHVsZV9pbmZvIGJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogNSU7XG59XG4uaG92ZXJEaXYge1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBtYXJnaW46IC04MCUgMCAwIC02JTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogNTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7IFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbn1cbi8qIC5tYXQtZmFiLCAuY2FyZF9pbmZvIGg1LCAuc2NoZWR1bGVfaW5mbyBoNSB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcbn0gKi9cblxuLmNhcmQtZGl2LWNvbnRhaW5lcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2FyZF9pbmZvIGg1LCAuc2NoZWR1bGVfaW5mbyBoNXtcbiAgICBjb2xvcjogIzY3M0FCNztcbn1cblxuLmdvYWxzX2luZm8gLCAuc2NoZWR1bGVfZGl2e1xuICAgIG1hcmdpbjogMiU7XG59XG4uc2NoZWR1bGVfZGl2IGg1IHtcbiAgICBtYXJnaW4tdG9wOiA0JTtcbn1cbi5zY2hlZHVsZV9kaXYgdGQge1xuICAgIHdpZHRoOiAxMyU7XG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDFweCl7XG4gICAgLmNhcmQge1xuICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmNhcmRfaW5mbywgLnNjaGVkdWxlX2luZm97XG4gICAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/default/default.component.ts":
/*!**********************************************!*\
  !*** ./src/app/default/default.component.ts ***!
  \**********************************************/
/*! exports provided: DefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultComponent", function() { return DefaultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../chat.service */ "./src/app/chat.service.ts");
/* harmony import */ var _sockets_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sockets.service */ "./src/app/sockets.service.ts");

/// <reference types="@types/googlemaps" />






let DefaultComponent = class DefaultComponent {
    constructor(_router, userService, socketsService, chatService, mapsAPILoader) {
        this._router = _router;
        this.userService = userService;
        this.socketsService = socketsService;
        this.chatService = chatService;
        this.mapsAPILoader = mapsAPILoader;
        this.members = [];
    }
    ngOnInit() {
        this.host_id = localStorage.getItem("id");
        this.gym = { name: '', formatted_address: '' };
        this.hoverIndex = -1;
        this.goalsDiv = false;
        this.scheduleDiv = false;
        this.defaultGymPage();
        // init google api
        this.mapsAPILoader.load().then(() => {
            var map = new google.maps.Map(document.getElementById('map'));
            // getDetails query, find gym info and set to gym variable
            this.service = new google.maps.places.PlacesService(map);
            let request = {
                placeId: `${localStorage.getItem('gym')}`,
                fields: ["formatted_address", 'name']
            };
            this.service.getDetails(request, (res, status) => {
                this.gym = res;
            });
        });
    }
    // get self data, get other users who set this as a default gym.
    defaultGymPage() {
        this.userService.getSelf(localStorage.getItem('id'))
            .subscribe(data => {
            this.self = data;
            this.userService.getGymMembers({ self_id: this.self._id, gym_id: data['default_gym'] })
                .subscribe(members => {
                this.members = members;
                console.log(this.members);
                this.matchingMembers();
            });
        });
    }
    //create chat, takes in other user's Id, check to see if there's a chatroom between the two users already existing. If not, create new chatroom, id randomly generated
    createChat(guest_id) {
        this.chatService.chatCheck({ host_id: this.host_id, guest_id: guest_id })
            .subscribe((data) => {
            if (data.length === 0) {
                let chatroom_id = this.chatId();
                this.socketsService.createChat({ host_id: this.host_id, chatroom_id: chatroom_id, guest_id: guest_id });
                this._router.navigate(['/main/chat', chatroom_id]);
            }
            else {
                let room_id = data[0]['chatroom_id'];
                this._router.navigate(['/main/chat/', room_id]);
            }
        });
    }
    matchingMembers() {
        let a = this.members;
        let temp = [];
        // if preference for any key is true, then push into temp array to check later
        for (let key in this.self['preference']) {
            if (this.self['preference'][key] == true) {
                temp.push(key);
            }
        }
        //loop through members, set counter  && check each member's preference with logged in user's preferences
        for (let i = 0; i < this.members.length; i++) {
            let counter = 0;
            for (let j = 0; j < temp.length; j++) {
                let idx = temp[j];
                if (this.members[i]['preference'][idx] === true) {
                    counter++;
                }
            }
            this.members[i]['ranking'] = counter;
        }
        //sort by highest match count to lowest
        this.members = this.members.sort((a, b) => (a['ranking'] > b['ranking']) ? -1 : 1);
        // filter members by match count, gender of both parties, and gender preference of both parties.
        this.members = this.members.filter(el => ((el['ranking'] > 0) && (this.self['gender'] == el['preference']['gender']) && (this.self['preference']['gender'] == el['gender'])));
    }
    hover(i, div) {
        this.hoverIndex = i;
        if (div == 'goals') {
            this.goalsDiv = true;
        }
        else if (div == 'schedule') {
            this.scheduleDiv = true;
        }
        else {
            this.goalsDiv = false;
            this.scheduleDiv = false;
        }
    }
    getAge(date) {
        let today = new Date();
        let bday = new Date(date);
        return Math.floor((today - bday) / (1000 * 60 * 60 * 24 * 365));
    }
    //randomly generate chatroom id for socket chat
    chatId() {
        let text = '';
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 6; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
};
DefaultComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _sockets_service__WEBPACK_IMPORTED_MODULE_6__["SocketsService"] },
    { type: _chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"] },
    { type: _agm_core__WEBPACK_IMPORTED_MODULE_3__["MapsAPILoader"] }
];
DefaultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-default',
        template: __webpack_require__(/*! raw-loader!./default.component.html */ "./node_modules/raw-loader/index.js!./src/app/default/default.component.html"),
        styles: [__webpack_require__(/*! ./default.component.css */ "./src/app/default/default.component.css")]
    })
], DefaultComponent);



/***/ }),

/***/ "./src/app/edit-info/edit-info.component.css":
/*!***************************************************!*\
  !*** ./src/app/edit-info/edit-info.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".some_container {\n  width: 80%;\n  margin: 2% auto;\n}\n\n.info_form_container, .edit_password_container{\n  width: 80%;\n  margin: 5% auto;\n}\n\nlabel {\n  width:30%;\n  display: inline-block\n}\n\ninput{\n  width: 40%;\n  display: inline-block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1pbmZvL2VkaXQtaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFNBQVM7RUFDVDtBQUNGOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtaW5mby9lZGl0LWluZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zb21lX2NvbnRhaW5lciB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMiUgYXV0bztcbn1cblxuLmluZm9fZm9ybV9jb250YWluZXIsIC5lZGl0X3Bhc3N3b3JkX2NvbnRhaW5lcntcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiA1JSBhdXRvO1xufVxuXG5sYWJlbCB7XG4gIHdpZHRoOjMwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrXG59XG5cbmlucHV0e1xuICB3aWR0aDogNDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/edit-info/edit-info.component.ts":
/*!**************************************************!*\
  !*** ./src/app/edit-info/edit-info.component.ts ***!
  \**************************************************/
/*! exports provided: EditInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditInfoComponent", function() { return EditInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");



let EditInfoComponent = class EditInfoComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
        this.self = { fname: '', lname: "", email: '' };
        this.password = { old: '', new: '' };
        this.getSelf();
    }
    getSelf() {
        this.userService.getSelf(localStorage.getItem('id'))
            .subscribe(data => {
            this.self = data;
        });
    }
    changeInfo() {
        this.userService.updateInfo(this.self)
            .subscribe(data => {
            console.log(data);
            this.getSelf();
        });
    }
    changePassword() {
        this.userService.updatePassword({ id: this.self._id, old: this.password.old, new: this.password.new })
            .subscribe(data => {
            console.log(data);
        });
    }
};
EditInfoComponent.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
EditInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-info',
        template: __webpack_require__(/*! raw-loader!./edit-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/edit-info/edit-info.component.html"),
        styles: [__webpack_require__(/*! ./edit-info.component.css */ "./src/app/edit-info/edit-info.component.css")]
    })
], EditInfoComponent);



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HttpService = class HttpService {
    constructor() { }
};
HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpService);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/* BASIC */\n\nhtml {\n  background-color: #56baed;\n}\n\nbody {\n  font-family: \"Poppins\", sans-serif;\n  height: 100vh;\n}\n\na {\n  color: #92badd;\n  display:inline-block;\n  text-decoration: none;\n  font-weight: 400;\n}\n\nh2 {\n  text-align: center;\n  font-size: 16px;\n  font-weight: 600;\n  text-transform: uppercase;\n  display:inline-block;\n  margin: 40px 8px 10px 8px;\n  color: #cccccc;\n}\n\n/* STRUCTURE */\n\n.wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 100%;\n  min-height: 100%;\n  padding: 20px;\n}\n\n#formContent {\n  margin-top: 10%;\n  border-radius: 10px 10px 10px 10px;\n  background: #fff;\n  padding: 30px;\n  width: 90%;\n  max-width: 450px;\n  position: relative;\n  padding: 0px;\n  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\n  text-align: center;\n}\n\n#formFooter {\n  background-color: #f6f6f6;\n  border-top: 1px solid #dce8f1;\n  padding: 25px;\n  text-align: center;\n  border-radius: 0 0 10px 10px;\n}\n\n/* TABS */\n\nh2.inactive {\n  color: #cccccc;\n}\n\nh2.active {\n  color: #0d0d0d;\n  border-bottom: 2px solid #5fbae9;\n}\n\n/* FORM TYPOGRAPHY*/\n\ninput[type=button], input[type=submit], input[type=reset]  {\n  background-color: #56baed;\n  border: none;\n  color: white;\n  padding: 15px 80px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  text-transform: uppercase;\n  font-size: 13px;\n  box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\n  border-radius: 5px 5px 5px 5px;\n  margin: 5px 20px 40px 20px;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n\ninput[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {\n  background-color: #39ace7;\n}\n\ninput[type=button]:active, input[type=submit]:active, input[type=reset]:active  {\n  -webkit-transform: scale(0.95);\n  transform: scale(0.95);\n}\n\ninput[type=text],[type=password] {\n  background-color: #f6f6f6;\n  border: none;\n  color: #0d0d0d;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 5px;\n  width: 85%;\n  border: 2px solid #f6f6f6;\n  -webkit-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n  border-radius: 5px 5px 5px 5px;\n}\n\ninput[type=text]:focus, [type=password]:focus {\n  background-color: #fff;\n  border-bottom: 2px solid #5fbae9;\n}\n\ninput[type=text]:placeholder, [type=password]:placeholder {\n  color: #cccccc;\n}\n\n/* ANIMATIONS */\n\n/* Simple CSS3 Fade-in-down Animation */\n\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n@-webkit-keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n/* Simple CSS3 Fade-in Animation */\n\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n\n.fadeIn {\n  opacity:0;\n  -webkit-animation:fadeIn ease-in 1;\n  animation:fadeIn ease-in 1;\n\n  -webkit-animation-fill-mode:forwards;\n  animation-fill-mode:forwards;\n\n  -webkit-animation-duration:1s;\n  animation-duration:1s;\n}\n\n.fadeIn.first {\n  -webkit-animation-delay: 0.4s;\n  animation-delay: 0.4s;\n}\n\n.fadeIn.second {\n  -webkit-animation-delay: 0.6s;\n  animation-delay: 0.6s;\n}\n\n.fadeIn.third {\n  -webkit-animation-delay: 0.8s;\n  animation-delay: 0.8s;\n}\n\n.fadeIn.fourth {\n  -webkit-animation-delay: 1s;\n  animation-delay: 1s;\n}\n\n/* Simple CSS3 Fade-in Animation */\n\n.underlineHover:after {\n  display: block;\n  left: 0;\n  bottom: -10px;\n  width: 0;\n  height: 2px;\n  background-color: #56baed;\n  content: \"\";\n  -webkit-transition: width 0.2s;\n  transition: width 0.2s;\n}\n\n.underlineHover:hover {\n  color: #0d0d0d;\n}\n\n.underlineHover:hover:after{\n  width: 100%;\n}\n\n/* OTHERS */\n\n*:focus {\n    outline: none;\n}\n\n#icon {\n  width:60%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsVUFBVTs7QUFFVjtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUlBLGNBQWM7O0FBRWQ7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBRWYsa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWTtFQUVaLHlDQUF5QztFQUN6QyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixrQkFBa0I7RUFFbEIsNEJBQTRCO0FBQzlCOztBQUlBLFNBQVM7O0FBRVQ7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdDQUFnQztBQUNsQzs7QUFJQSxtQkFBbUI7O0FBRW5CO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixlQUFlO0VBRWYsOENBQThDO0VBRTlDLDhCQUE4QjtFQUM5QiwwQkFBMEI7RUFDMUIsd0NBQXdDO0VBSXhDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUVFLDhCQUE4QjtFQUc5QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFdBQVc7RUFDWCxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLHdDQUF3QztFQUl4QyxnQ0FBZ0M7RUFFaEMsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBSUEsZUFBZTs7QUFFZix1Q0FBdUM7O0FBQ3ZDO0VBQ0Usa0NBQWtDO0VBQ2xDLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLGlDQUFpQztFQUNqQyx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDViwyQ0FBMkM7SUFDM0MsbUNBQW1DO0VBQ3JDO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLDJDQUEyQztJQUMzQyxtQ0FBbUM7RUFDckM7RUFDQTtJQUNFLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsZUFBZTtFQUNqQjtBQUNGOztBQUVBLGtDQUFrQzs7QUFDbEMsNEJBQTRCLE9BQU8sU0FBUyxFQUFFLEVBQUUsS0FBSyxTQUFTLEVBQUUsRUFBRTs7QUFFbEUsb0JBQW9CLE9BQU8sU0FBUyxFQUFFLEVBQUUsS0FBSyxTQUFTLEVBQUUsRUFBRTs7QUFFMUQ7RUFDRSxTQUFTO0VBQ1Qsa0NBQWtDO0VBRWxDLDBCQUEwQjs7RUFFMUIsb0NBQW9DO0VBRXBDLDRCQUE0Qjs7RUFFNUIsNkJBQTZCO0VBRTdCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDZCQUE2QjtFQUU3QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSw2QkFBNkI7RUFFN0IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsNkJBQTZCO0VBRTdCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUUzQixtQkFBbUI7QUFDckI7O0FBRUEsa0NBQWtDOztBQUNsQztFQUNFLGNBQWM7RUFDZCxPQUFPO0VBQ1AsYUFBYTtFQUNiLFFBQVE7RUFDUixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCw4QkFBc0I7RUFBdEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFJQSxXQUFXOztBQUVYO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtFQUNFLFNBQVM7QUFDWCIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIEJBU0lDICovXG5cbmh0bWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZiYWVkO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG5hIHtcbiAgY29sb3I6ICM5MmJhZGQ7XG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDQwcHggOHB4IDEwcHggOHB4O1xuICBjb2xvcjogI2NjY2NjYztcbn1cblxuXG5cbi8qIFNUUlVDVFVSRSAqL1xuXG4ud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuI2Zvcm1Db250ZW50IHtcbiAgbWFyZ2luLXRvcDogMTAlO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIG1heC13aWR0aDogNDUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLDAsMCwwLjMpO1xuICBib3gtc2hhZG93OiAwIDMwcHggNjBweCAwIHJnYmEoMCwwLDAsMC4zKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jZm9ybUZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGNlOGYxO1xuICBwYWRkaW5nOiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcbn1cblxuXG5cbi8qIFRBQlMgKi9cblxuaDIuaW5hY3RpdmUge1xuICBjb2xvcjogI2NjY2NjYztcbn1cblxuaDIuYWN0aXZlIHtcbiAgY29sb3I6ICMwZDBkMGQ7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNWZiYWU5O1xufVxuXG5cblxuLyogRk9STSBUWVBPR1JBUEhZKi9cblxuaW5wdXRbdHlwZT1idXR0b25dLCBpbnB1dFt0eXBlPXN1Ym1pdF0sIGlucHV0W3R5cGU9cmVzZXRdICB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NmJhZWQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNXB4IDgwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDEwcHggMzBweCAwIHJnYmEoOTUsMTg2LDIzMywwLjQpO1xuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCAwIHJnYmEoOTUsMTg2LDIzMywwLjQpO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xuICBtYXJnaW46IDVweCAyMHB4IDQwcHggMjBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbmlucHV0W3R5cGU9YnV0dG9uXTpob3ZlciwgaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyLCBpbnB1dFt0eXBlPXJlc2V0XTpob3ZlciAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzlhY2U3O1xufVxuXG5pbnB1dFt0eXBlPWJ1dHRvbl06YWN0aXZlLCBpbnB1dFt0eXBlPXN1Ym1pdF06YWN0aXZlLCBpbnB1dFt0eXBlPXJlc2V0XTphY3RpdmUgIHtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xufVxuXG5pbnB1dFt0eXBlPXRleHRdLFt0eXBlPXBhc3N3b3JkXSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICMwZDBkMGQ7XG4gIHBhZGRpbmc6IDE1cHggMzJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDVweDtcbiAgd2lkdGg6IDg1JTtcbiAgYm9yZGVyOiAycHggc29saWQgI2Y2ZjZmNjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XG59XG5cbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMsIFt0eXBlPXBhc3N3b3JkXTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNWZiYWU5O1xufVxuXG5pbnB1dFt0eXBlPXRleHRdOnBsYWNlaG9sZGVyLCBbdHlwZT1wYXNzd29yZF06cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2NjY2NjYztcbn1cblxuXG5cbi8qIEFOSU1BVElPTlMgKi9cblxuLyogU2ltcGxlIENTUzMgRmFkZS1pbi1kb3duIEFuaW1hdGlvbiAqL1xuLmZhZGVJbkRvd24ge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xuICBhbmltYXRpb24tbmFtZTogZmFkZUluRG93bjtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5Eb3duIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG59XG5cbi8qIFNpbXBsZSBDU1MzIEZhZGUtaW4gQW5pbWF0aW9uICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XG5ALW1vei1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XG5Aa2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxuXG4uZmFkZUluIHtcbiAgb3BhY2l0eTowO1xuICAtd2Via2l0LWFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xuICAtbW96LWFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xuICBhbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcblxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XG4gIC1tb3otYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcblxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjoxcztcbiAgLW1vei1hbmltYXRpb24tZHVyYXRpb246MXM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjoxcztcbn1cblxuLmZhZGVJbi5maXJzdCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC40cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xufVxuXG4uZmFkZUluLnNlY29uZCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC42cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xufVxuXG4uZmFkZUluLnRoaXJkIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuOHM7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xuICBhbmltYXRpb24tZGVsYXk6IDAuOHM7XG59XG5cbi5mYWRlSW4uZm91cnRoIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDFzO1xuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMXM7XG4gIGFuaW1hdGlvbi1kZWxheTogMXM7XG59XG5cbi8qIFNpbXBsZSBDU1MzIEZhZGUtaW4gQW5pbWF0aW9uICovXG4udW5kZXJsaW5lSG92ZXI6YWZ0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAtMTBweDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZiYWVkO1xuICBjb250ZW50OiBcIlwiO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjJzO1xufVxuXG4udW5kZXJsaW5lSG92ZXI6aG92ZXIge1xuICBjb2xvcjogIzBkMGQwZDtcbn1cblxuLnVuZGVybGluZUhvdmVyOmhvdmVyOmFmdGVye1xuICB3aWR0aDogMTAwJTtcbn1cblxuXG5cbi8qIE9USEVSUyAqL1xuXG4qOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4jaWNvbiB7XG4gIHdpZHRoOjYwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");





let LoginComponent = class LoginComponent {
    constructor(userService, _auth, _router) {
        this.userService = userService;
        this._auth = _auth;
        this._router = _router;
    }
    ngOnInit() {
    }
    loginUser() {
        this._auth.loginUser({ username: this.username, password: this.password })
            .subscribe(res => {
            this.userService.getSelf(res.user._id);
            console.log('login res', res);
            localStorage.setItem('gym', res['user']['default_gym']);
            localStorage.setItem('token', res['token']);
            localStorage.setItem('id', res['user']['_id']);
            this._router.navigate(['/main', 'default']);
        }, err => {
            console.log("received error", err);
            this._router.navigate(['/login']);
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".index_container {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n  }\n\n.is-mobile .toolbar{\n    position: fixed;\n    z-index: 2;\n}\n\nh1.project_name{\n    margin-left: 8px;\n}\n\n.sidebar_container{\n    -webkit-box-flex: 1;\n            flex: 1;\n}\n\n.is-mobile .sidebar_container{\n-webkit-box-flex: 1;\n        flex: 1 0 auto;\n}\n\n.mat-list-base .mat-list-item .mat-list-item-content{\n    margin: 0 2% !important;\n}\n\n.mat-sidenav {\n    width: 200px;\n}\n\n.spacer {\n    -webkit-box-flex: 1;\n            flex: 1 1 auto;\n}\n\n.toolbar a {\n    text-decoration: none;\n    margin-right: 2%;\n    color: grey;\n}\n\n.toolbar a:hover{\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtFQUNWOztBQUVGO0lBQ0ksZUFBZTtJQUNmLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFPO1lBQVAsT0FBTztBQUNYOztBQUVBO0FBQ0EsbUJBQWM7UUFBZCxjQUFjO0FBQ2Q7O0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQWM7WUFBZCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5kZXhfY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgfVxuXG4uaXMtbW9iaWxlIC50b29sYmFye1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAyO1xufVxuXG5oMS5wcm9qZWN0X25hbWV7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLnNpZGViYXJfY29udGFpbmVye1xuICAgIGZsZXg6IDE7XG59XG5cbi5pcy1tb2JpbGUgLnNpZGViYXJfY29udGFpbmVye1xuZmxleDogMSAwIGF1dG87XG59XG4ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbSAubWF0LWxpc3QtaXRlbS1jb250ZW50e1xuICAgIG1hcmdpbjogMCAyJSAhaW1wb3J0YW50O1xufVxuXG4ubWF0LXNpZGVuYXYge1xuICAgIHdpZHRoOiAyMDBweDtcbn1cblxuLnNwYWNlciB7XG4gICAgZmxleDogMSAxIGF1dG87XG59XG5cbi50b29sYmFyIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDIlO1xuICAgIGNvbG9yOiBncmV5O1xufVxuLnRvb2xiYXIgYTpob3ZlcntcbiAgICBjb2xvcjogd2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _sockets_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sockets.service */ "./src/app/sockets.service.ts");







let MainComponent = class MainComponent {
    constructor(_router, _userService, _authService, socketsService, changeDetectorRef, media) {
        this._router = _router;
        this._userService = _userService;
        this._authService = _authService;
        this.socketsService = socketsService;
        this.mobileQuery = media.matchMedia("(max-width: 768px)");
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    ngOnInit() {
        this.self_id = localStorage.getItem('id');
        this.checkPref();
        this.self = { fname: "", lname: "" };
        this.subscribeChats(this.self_id);
        this.unread = false;
        this._sub = this.socketsService.chatrooms.subscribe(data => {
            this.chatrooms = data;
            this.unread = this.checkUnread(this.chatrooms);
        });
    }
    ngOnChanges() {
        // this.unread = this.checkUnread(this.chatrooms);
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
        this._sub.unsubscribe();
    }
    checkPref() {
        this._userService.getSelf(this.self_id)
            .subscribe(data => {
            this.self = data;
            localStorage.setItem('gym', this.self.default_gym);
            if (!data['preference'] || !data['schedule']) {
                this._router.navigate(['/main', 'preferences']);
            }
        });
    }
    subscribeChats(id) {
        this.socketsService.getAllChats(id);
    }
    logout() {
        this._authService.logout();
        this._router.navigate(['/login']);
    }
    checkUnread(array) {
        for (let i = 0; i < array.length; i++) {
            if (array[i]['msg']) {
                for (let j = array[i]['msg'].length - 1; j >= 0; j--) {
                    if (array[i]['msg'][j]['sender']['_id'] != this.self_id && array[i]['msg'][j]['read'] == false) {
                        return true;
                    }
                    else if (array[i]['msg'][j]['sender']['_id'] != this.self_id && array[i]['msg'][j]['read'] == true) {
                        return false;
                    }
                    else {
                        continue;
                    }
                }
            }
        }
        return false;
    }
};
MainComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _sockets_service__WEBPACK_IMPORTED_MODULE_6__["SocketsService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["MediaMatcher"] }
];
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: __webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/main.component.html"),
        styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
    })
], MainComponent);



/***/ }),

/***/ "./src/app/map.service.ts":
/*!********************************!*\
  !*** ./src/app/map.service.ts ***!
  \********************************/
/*! exports provided: MapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapService", function() { return MapService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let MapService = class MapService {
    constructor(_http) {
        this._http = _http;
    }
    setDefault(data) {
        return this._http.post('/setDefaultGym', data);
    }
};
MapService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MapService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MapService);



/***/ }),

/***/ "./src/app/map/map.component.css":
/*!***************************************!*\
  !*** ./src/app/map/map.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map_search {\n margin: 0 2%;\n}\n\ninput[type=text]{\n  width: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsWUFBWTtBQUNiOztBQUVBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcF9zZWFyY2gge1xuIG1hcmdpbjogMCAyJTtcbn1cblxuaW5wdXRbdHlwZT10ZXh0XXtcbiAgd2lkdGg6IDMwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _map_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../map.service */ "./src/app/map.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");

/// <reference types="@types/googlemaps" />





let MapComponent = class MapComponent {
    constructor(mapsAPILoader, ngZone, mapService, userService, _router) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.mapService = mapService;
        this.userService = userService;
        this._router = _router;
    }
    ngOnInit() {
        this.self_id = localStorage.getItem('id');
        this.getSelf();
        //load Places Autocomplete
        this.mapsAPILoader.load().then(() => {
            this.geoCoder = new google.maps.Geocoder;
            // this.GymSearch
            this.autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
                types: ["establishment"]
            });
            this.autocomplete.addListener("place_changed", () => {
                this.ngZone.run(() => {
                    //get the place result
                    let place = this.autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    console.log('place', place);
                });
            });
        });
    }
    // Get Current Location Coordinates
    setDefaultGym(id) {
        this.mapService.setDefault({ id: this.self_id, gym_id: id })
            .subscribe(data => {
            this.self.default_gym = data['default_gym'];
            this._router.navigate(['/main', 'default']);
        });
    }
    getSelf() {
        this.userService.getSelf(this.self_id)
            .subscribe(data => {
            this.self = data;
        });
    }
};
MapComponent.ctorParameters = () => [
    { type: _agm_core__WEBPACK_IMPORTED_MODULE_2__["MapsAPILoader"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _map_service__WEBPACK_IMPORTED_MODULE_3__["MapService"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('search', { static: false })
], MapComponent.prototype, "searchElementRef", void 0);
MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-map',
        template: __webpack_require__(/*! raw-loader!./map.component.html */ "./node_modules/raw-loader/index.js!./src/app/map/map.component.html"),
        styles: [__webpack_require__(/*! ./map.component.css */ "./src/app/map/map.component.css")]
    })
], MapComponent);



/***/ }),

/***/ "./src/app/pref.service.ts":
/*!*********************************!*\
  !*** ./src/app/pref.service.ts ***!
  \*********************************/
/*! exports provided: PrefService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrefService", function() { return PrefService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let PrefService = class PrefService {
    constructor(http) {
        this.http = http;
    }
    updateGoals(data) {
        return this.http.post('/updateGoals', data);
    }
    updateSchedule(data) {
        return this.http.post('/updateSchedule', data);
    }
};
PrefService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PrefService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PrefService);



/***/ }),

/***/ "./src/app/preference/preference.component.css":
/*!*****************************************************!*\
  !*** ./src/app/preference/preference.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .mat-form-field-wrapper{\n  width: 600px !important;\n  margin-left: 4%;\n}\n.input_container, .place_container{\n  margin-top: 2%;\n}\n.mat-expansion-panel-header-description {\n  margin-left: 20px;\n  color: black;\n}\n.mat-action-row{\n  -webkit-box-pack: none !important;\n          justify-content: none !important;\n}\n.pref_container, .goals_container{\n  width: 75%;\n  margin: 2%;\n}\n.place_container{\n  width: 550px;\n  margin: 0 2%;\n  background-position-x: 50% !important;\n  background-position-y: 50% !important;\n  height: 450px;\n  color:white;\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align:center ;\n          align-items:center ;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.gym_title {\n  margin-top: 125px;\n}\n.place_info{\n  opacity: 1;\n}\n.table_container, .gender_div {\n  margin: 2%;\n}\n.table_container input{\n  text-align: center;\n}\n.mat-icon{\n  margin-right: 2%;\n}\n.gender_div h5{\n  margin-left: 2%;\n}\n.goals_container label{\n  width: 150px;\n  height: 50px;\n  border: 3px solid #9C27B0;\n  border-radius: 10px;\n  margin: 1% 1%;\n  \n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlZmVyZW5jZS9wcmVmZXJlbmNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsaUNBQWdDO1VBQWhDLGdDQUFnQztBQUNsQztBQUVBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7QUFDWjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixxQ0FBcUM7RUFDckMscUNBQXFDO0VBQ3JDLGFBQWE7RUFDYixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBR0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsYUFBYTs7QUFFZiIsImZpbGUiOiJzcmMvYXBwL3ByZWZlcmVuY2UvcHJlZmVyZW5jZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC13cmFwcGVye1xuICB3aWR0aDogNjAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDQlO1xufVxuLmlucHV0X2NvbnRhaW5lciwgLnBsYWNlX2NvbnRhaW5lcntcbiAgbWFyZ2luLXRvcDogMiU7XG59XG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuLm1hdC1hY3Rpb24tcm93e1xuICBqdXN0aWZ5LWNvbnRlbnQ6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnByZWZfY29udGFpbmVyLCAuZ29hbHNfY29udGFpbmVye1xuICB3aWR0aDogNzUlO1xuICBtYXJnaW46IDIlO1xufVxuLnBsYWNlX2NvbnRhaW5lcntcbiAgd2lkdGg6IDU1MHB4O1xuICBtYXJnaW46IDAgMiU7XG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogNTAlICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogNTAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDUwcHg7XG4gIGNvbG9yOndoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOmNlbnRlciA7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5neW1fdGl0bGUge1xuICBtYXJnaW4tdG9wOiAxMjVweDtcbn1cbi5wbGFjZV9pbmZve1xuICBvcGFjaXR5OiAxO1xufVxuLnRhYmxlX2NvbnRhaW5lciwgLmdlbmRlcl9kaXYge1xuICBtYXJnaW46IDIlO1xufVxuLnRhYmxlX2NvbnRhaW5lciBpbnB1dHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWF0LWljb257XG4gIG1hcmdpbi1yaWdodDogMiU7XG59XG5cbi5nZW5kZXJfZGl2IGg1e1xuICBtYXJnaW4tbGVmdDogMiU7XG59XG5cblxuLmdvYWxzX2NvbnRhaW5lciBsYWJlbHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkICM5QzI3QjA7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbjogMSUgMSU7XG4gIFxufVxuIl19 */"

/***/ }),

/***/ "./src/app/preference/preference.component.ts":
/*!****************************************************!*\
  !*** ./src/app/preference/preference.component.ts ***!
  \****************************************************/
/*! exports provided: PreferenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreferenceComponent", function() { return PreferenceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _pref_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pref.service */ "./src/app/pref.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _map_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../map.service */ "./src/app/map.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");

/// <reference types="@types/googlemaps" />







let PreferenceComponent = class PreferenceComponent {
    constructor(prefService, mapService, userService, mapsAPILoader, ngZone, santization) {
        this.prefService = prefService;
        this.mapService = mapService;
        this.userService = userService;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.santization = santization;
        this.step = 0;
    }
    ngOnInit() {
        this.show = false;
        this.self = {
            default_gym: '',
            _id: ''
        };
        this.schedule = {
            mon: '',
            tues: '',
            wed: '',
            thurs: '',
            fri: '',
            sat: '',
            sun: '',
        };
        this.gym = {
            name: '',
            url: '',
            formatted_address: '',
            formatted_phone_number: '',
            place_id: ''
        };
        this.preference = {
            user_id: localStorage.getItem('id'), weight_loss: false, cardio: false, endurance: false, flexibility: false, muscle: false, strength: false, genFit: false, gender: ""
        };
        this.getSelf();
        //load Places Autocomplete
        this.mapsAPILoader.load().then(() => {
            this.geoCoder = new google.maps.Geocoder;
            // this.GymSearch
            this.autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
                types: ["establishment"]
            });
            this.autocomplete.addListener("place_changed", () => {
                this.ngZone.run(() => {
                    //get the place result
                    let place = this.autocomplete.getPlace();
                    // this.autocomplete.get
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    this.gym = place;
                    this.show = true;
                    this.img = this.santization.bypassSecurityTrustStyle(`linear-gradient( rgba(0, 0, 0, 0.80), rgba(0, 0, 0, 0.80) ),url(${this.gym['photos'][0].getUrl()})`);
                });
            });
        });
    }
    getSelf() {
        this.userService.getSelf(localStorage.getItem('id')).subscribe(data => {
            this.self = data;
            if (data['schedule']) {
                this.schedule = data['schedule'];
            }
            if (data['preference']) {
                this.preference = data['preference'];
            }
            this.selectFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](this.preference['gender'], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required);
        });
    }
    updateSchedule() {
        this.prefService.updateSchedule({ id: localStorage.getItem('id'), schedule: this.schedule })
            .subscribe(data => {
            this.getSelf();
        });
    }
    updateGoals() {
        console.log('preference', this.preference);
        this.prefService.updateGoals({ id: localStorage.getItem('id'), goals: this.preference })
            .subscribe(data => {
            this.getSelf();
        });
    }
    setDefaultGym(id) {
        localStorage.setItem('gym', id);
        console.log(localStorage.getItem('gym'));
        this.mapService.setDefault({ id: localStorage.getItem('id'), gym_id: id })
            .subscribe(data => {
            this.self.default_gym = data['default_gym'];
            this.getSelf();
        });
    }
    setStep(index) {
        this.step = index;
    }
    nextStep() {
        this.step++;
    }
    prevStep() {
        this.step--;
    }
};
PreferenceComponent.ctorParameters = () => [
    { type: _pref_service__WEBPACK_IMPORTED_MODULE_3__["PrefService"] },
    { type: _map_service__WEBPACK_IMPORTED_MODULE_5__["MapService"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _agm_core__WEBPACK_IMPORTED_MODULE_2__["MapsAPILoader"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('search', { static: false })
], PreferenceComponent.prototype, "searchElementRef", void 0);
PreferenceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-preference',
        template: __webpack_require__(/*! raw-loader!./preference.component.html */ "./node_modules/raw-loader/index.js!./src/app/preference/preference.component.html"),
        styles: [__webpack_require__(/*! ./preference.component.css */ "./src/app/preference/preference.component.css")]
    })
], PreferenceComponent);



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/* BASIC */\n\nhtml {\n  background-color: #56baed;\n}\n\nbody {\n  font-family: \"Poppins\", sans-serif;\n  height: 100vh;\n}\n\na {\n  color: #92badd;\n  display:inline-block;\n  text-decoration: none;\n  font-weight: 400;\n}\n\nh2 {\n  text-align: center;\n  font-size: 16px;\n  font-weight: 600;\n  text-transform: uppercase;\n  display:inline-block;\n  margin: 40px 8px 10px 8px;\n  color: #cccccc;\n}\n\n/* STRUCTURE */\n\n.wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 100%;\n  min-height: 100%;\n  padding: 20px;\n}\n\n#formContent {\n  border-radius: 10px 10px 10px 10px;\n  background: #fff;\n  padding: 30px;\n  width: 90%;\n  max-width: 450px;\n  position: relative;\n  padding: 0px;\n  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\n  text-align: center;\n}\n\n#formFooter {\n  background-color: #f6f6f6;\n  border-top: 1px solid #dce8f1;\n  padding: 25px;\n  text-align: center;\n  border-radius: 0 0 10px 10px;\n}\n\n/* TABS */\n\nh2.inactive {\n  color: #cccccc;\n}\n\nh2.active {\n  color: #0d0d0d;\n  border-bottom: 2px solid #5fbae9;\n}\n\n/* FORM TYPOGRAPHY*/\n\ninput[type=button], input[type=submit], input[type=reset]  {\n  background-color: #56baed;\n  border: none;\n  color: white;\n  padding: 15px 80px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  text-transform: uppercase;\n  font-size: 13px;\n  box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\n  border-radius: 5px 5px 5px 5px;\n  margin: 5px 20px 40px 20px;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n\ninput[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {\n  background-color: #39ace7;\n}\n\ninput[type=button]:active, input[type=submit]:active, input[type=reset]:active  {\n  -webkit-transform: scale(0.95);\n  transform: scale(0.95);\n}\n\ninput[type=text],[type=password], [type=date]{\n  background-color: #f6f6f6;\n  border: none;\n  color: #0d0d0d;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 5px;\n  width: 85%;\n  border: 2px solid #f6f6f6;\n  -webkit-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n  border-radius: 5px 5px 5px 5px;\n}\n\ninput[type=text]:focus, [type=password]:focus, [type=date]:focus {\n  background-color: #fff;\n  border-bottom: 2px solid #5fbae9;\n}\n\ninput[type=text]:placeholder, [type=password]:placeholder {\n  color: #cccccc;\n}\n\n/* ANIMATIONS */\n\n/* Simple CSS3 Fade-in-down Animation */\n\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n@-webkit-keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n/* Simple CSS3 Fade-in Animation */\n\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n\n.fadeIn {\n  opacity:0;\n  -webkit-animation:fadeIn ease-in 1;\n  animation:fadeIn ease-in 1;\n\n  -webkit-animation-fill-mode:forwards;\n  animation-fill-mode:forwards;\n\n  -webkit-animation-duration:1s;\n  animation-duration:1s;\n}\n\n.fadeIn.first {\n  -webkit-animation-delay: 0.4s;\n  animation-delay: 0.4s;\n}\n\n.fadeIn.second {\n  -webkit-animation-delay: 0.6s;\n  animation-delay: 0.6s;\n}\n\n.fadeIn.third {\n  -webkit-animation-delay: 0.8s;\n  animation-delay: 0.8s;\n}\n\n.fadeIn.fourth {\n  -webkit-animation-delay: 1s;\n  animation-delay: 1s;\n}\n\n/* Simple CSS3 Fade-in Animation */\n\n.underlineHover:after {\n  display: block;\n  left: 0;\n  bottom: -10px;\n  width: 0;\n  height: 2px;\n  background-color: #56baed;\n  content: \"\";\n  -webkit-transition: width 0.2s;\n  transition: width 0.2s;\n}\n\n.underlineHover:hover {\n  color: #0d0d0d;\n}\n\n.underlineHover:hover:after{\n  width: 100%;\n}\n\n/* OTHERS */\n\n*:focus {\n    outline: none;\n}\n\n#icon {\n  width:60%;\n}\n\n#dob_label {\n  width: 30%;\n\n}\n\n#dob {\n  width: 55%;\n\n}\n\n#gender_label {\n  width:30%;\n  margin-right: 12px;\n}\n\ninput[type=\"radio\"], input[type='date']{\n margin: 2%;\n color: grey;\n}\n\nlabel {\n  color: grey;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsVUFBVTs7QUFFVjtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUlBLGNBQWM7O0FBRWQ7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFFRSxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0VBRVoseUNBQXlDO0VBQ3pDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLGtCQUFrQjtFQUVsQiw0QkFBNEI7QUFDOUI7O0FBSUEsU0FBUzs7QUFFVDtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0NBQWdDO0FBQ2xDOztBQUlBLG1CQUFtQjs7QUFFbkI7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLGVBQWU7RUFFZiw4Q0FBOEM7RUFFOUMsOEJBQThCO0VBQzlCLDBCQUEwQjtFQUMxQix3Q0FBd0M7RUFJeEMsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBRUUsOEJBQThCO0VBRzlCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsV0FBVztFQUNYLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsd0NBQXdDO0VBSXhDLGdDQUFnQztFQUVoQyw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFHQSxlQUFlOztBQUVmLHVDQUF1Qzs7QUFDdkM7RUFDRSxrQ0FBa0M7RUFDbEMsMEJBQTBCO0VBQzFCLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsaUNBQWlDO0VBQ2pDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLDJDQUEyQztJQUMzQyxtQ0FBbUM7RUFDckM7RUFDQTtJQUNFLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsMkNBQTJDO0lBQzNDLG1DQUFtQztFQUNyQztFQUNBO0lBQ0UsVUFBVTtJQUNWLHVCQUF1QjtJQUN2QixlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUEsa0NBQWtDOztBQUNsQyw0QkFBNEIsT0FBTyxTQUFTLEVBQUUsRUFBRSxLQUFLLFNBQVMsRUFBRSxFQUFFOztBQUVsRSxvQkFBb0IsT0FBTyxTQUFTLEVBQUUsRUFBRSxLQUFLLFNBQVMsRUFBRSxFQUFFOztBQUUxRDtFQUNFLFNBQVM7RUFDVCxrQ0FBa0M7RUFFbEMsMEJBQTBCOztFQUUxQixvQ0FBb0M7RUFFcEMsNEJBQTRCOztFQUU1Qiw2QkFBNkI7RUFFN0IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsNkJBQTZCO0VBRTdCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDZCQUE2QjtFQUU3QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSw2QkFBNkI7RUFFN0IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsMkJBQTJCO0VBRTNCLG1CQUFtQjtBQUNyQjs7QUFFQSxrQ0FBa0M7O0FBQ2xDO0VBQ0UsY0FBYztFQUNkLE9BQU87RUFDUCxhQUFhO0VBQ2IsUUFBUTtFQUNSLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsV0FBVztFQUNYLDhCQUFzQjtFQUF0QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUlBLFdBQVc7O0FBRVg7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUNBO0VBQ0UsVUFBVTs7QUFFWjs7QUFDQTtFQUNFLFVBQVU7O0FBRVo7O0FBQ0E7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCOztBQUNBO0NBQ0MsVUFBVTtDQUNWLFdBQVc7QUFDWjs7QUFDQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIEJBU0lDICovXG5cbmh0bWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZiYWVkO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG5hIHtcbiAgY29sb3I6ICM5MmJhZGQ7XG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDQwcHggOHB4IDEwcHggOHB4O1xuICBjb2xvcjogI2NjY2NjYztcbn1cblxuXG5cbi8qIFNUUlVDVFVSRSAqL1xuXG4ud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuI2Zvcm1Db250ZW50IHtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAzMHB4O1xuICB3aWR0aDogOTAlO1xuICBtYXgtd2lkdGg6IDQ1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDBweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDMwcHggNjBweCAwIHJnYmEoMCwwLDAsMC4zKTtcbiAgYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2JhKDAsMCwwLDAuMyk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2Zvcm1Gb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RjZThmMTtcbiAgcGFkZGluZzogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XG59XG5cblxuXG4vKiBUQUJTICovXG5cbmgyLmluYWN0aXZlIHtcbiAgY29sb3I6ICNjY2NjY2M7XG59XG5cbmgyLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMGQwZDBkO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzVmYmFlOTtcbn1cblxuXG5cbi8qIEZPUk0gVFlQT0dSQVBIWSovXG5cbmlucHV0W3R5cGU9YnV0dG9uXSwgaW5wdXRbdHlwZT1zdWJtaXRdLCBpbnB1dFt0eXBlPXJlc2V0XSAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZiYWVkO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTVweCA4MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMCByZ2JhKDk1LDE4NiwyMzMsMC40KTtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMCByZ2JhKDk1LDE4NiwyMzMsMC40KTtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcbiAgbWFyZ2luOiA1cHggMjBweCA0MHB4IDIwcHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG5pbnB1dFt0eXBlPWJ1dHRvbl06aG92ZXIsIGlucHV0W3R5cGU9c3VibWl0XTpob3ZlciwgaW5wdXRbdHlwZT1yZXNldF06aG92ZXIgIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5YWNlNztcbn1cblxuaW5wdXRbdHlwZT1idXR0b25dOmFjdGl2ZSwgaW5wdXRbdHlwZT1zdWJtaXRdOmFjdGl2ZSwgaW5wdXRbdHlwZT1yZXNldF06YWN0aXZlICB7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbn1cblxuaW5wdXRbdHlwZT10ZXh0XSxbdHlwZT1wYXNzd29yZF0sIFt0eXBlPWRhdGVde1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjMGQwZDBkO1xuICBwYWRkaW5nOiAxNXB4IDMycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luOiA1cHg7XG4gIHdpZHRoOiA4NSU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmNmY2ZjY7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xufVxuXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzLCBbdHlwZT1wYXNzd29yZF06Zm9jdXMsIFt0eXBlPWRhdGVdOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1ZmJhZTk7XG59XG5cbmlucHV0W3R5cGU9dGV4dF06cGxhY2Vob2xkZXIsIFt0eXBlPXBhc3N3b3JkXTpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjY2NjY2NjO1xufVxuXG5cbi8qIEFOSU1BVElPTlMgKi9cblxuLyogU2ltcGxlIENTUzMgRmFkZS1pbi1kb3duIEFuaW1hdGlvbiAqL1xuLmZhZGVJbkRvd24ge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xuICBhbmltYXRpb24tbmFtZTogZmFkZUluRG93bjtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5Eb3duIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG59XG5cbi8qIFNpbXBsZSBDU1MzIEZhZGUtaW4gQW5pbWF0aW9uICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XG5ALW1vei1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XG5Aa2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxuXG4uZmFkZUluIHtcbiAgb3BhY2l0eTowO1xuICAtd2Via2l0LWFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xuICAtbW96LWFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xuICBhbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcblxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XG4gIC1tb3otYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcblxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjoxcztcbiAgLW1vei1hbmltYXRpb24tZHVyYXRpb246MXM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjoxcztcbn1cblxuLmZhZGVJbi5maXJzdCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC40cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xufVxuXG4uZmFkZUluLnNlY29uZCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC42cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xufVxuXG4uZmFkZUluLnRoaXJkIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuOHM7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xuICBhbmltYXRpb24tZGVsYXk6IDAuOHM7XG59XG5cbi5mYWRlSW4uZm91cnRoIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDFzO1xuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMXM7XG4gIGFuaW1hdGlvbi1kZWxheTogMXM7XG59XG5cbi8qIFNpbXBsZSBDU1MzIEZhZGUtaW4gQW5pbWF0aW9uICovXG4udW5kZXJsaW5lSG92ZXI6YWZ0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAtMTBweDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZiYWVkO1xuICBjb250ZW50OiBcIlwiO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjJzO1xufVxuXG4udW5kZXJsaW5lSG92ZXI6aG92ZXIge1xuICBjb2xvcjogIzBkMGQwZDtcbn1cblxuLnVuZGVybGluZUhvdmVyOmhvdmVyOmFmdGVye1xuICB3aWR0aDogMTAwJTtcbn1cblxuXG5cbi8qIE9USEVSUyAqL1xuXG4qOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4jaWNvbiB7XG4gIHdpZHRoOjYwJTtcbn1cbiNkb2JfbGFiZWwge1xuICB3aWR0aDogMzAlO1xuXG59XG4jZG9iIHtcbiAgd2lkdGg6IDU1JTtcblxufVxuI2dlbmRlcl9sYWJlbCB7XG4gIHdpZHRoOjMwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuaW5wdXRbdHlwZT1cInJhZGlvXCJdLCBpbnB1dFt0eXBlPSdkYXRlJ117XG4gbWFyZ2luOiAyJTtcbiBjb2xvcjogZ3JleTtcbn1cbmxhYmVsIHtcbiAgY29sb3I6IGdyZXk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let RegisterComponent = class RegisterComponent {
    constructor(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
    }
    ngOnInit() {
        this.newUser = { username: '', password: '', fname: '', lname: '', email: '', dob: '', gender: '' };
        this.selected = false;
    }
    addUser() {
        let observable = this._auth.registerUser(this.newUser);
        observable.subscribe(data => {
            if (data['error']) {
                this._router.navigate(['/register']);
            }
            localStorage.setItem("token", data['token']);
            localStorage.setItem('id', data['id']);
            this._router.navigate(['/main', 'default']);
        });
    }
    genderSelected() {
        this.selected = true;
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html"),
        styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/sockets.service.ts":
/*!************************************!*\
  !*** ./src/app/sockets.service.ts ***!
  \************************************/
/*! exports provided: SocketsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketsService", function() { return SocketsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/index.js");



let SocketsService = class SocketsService {
    constructor(socket) {
        this.socket = socket;
        this.chatrooms = this.socket.fromEvent("allChatrooms");
        this.currentRoom = this.socket.fromEvent('currentChat');
    }
    ngOnInit() {
    }
    ngOnDestroy() {
    }
    postMsg(data) {
        this.socket.emit('postMsg', data);
    }
    createChat(data) {
        this.socket.emit('createChat', data);
    }
    getChatroom(room_id) {
        this.socket.emit('getChatroom', room_id);
    }
    getAllChats(id) {
        this.socket.emit('getAllChats', id);
    }
    setRead(data) {
        this.socket.emit('setRead', data);
    }
};
SocketsService.ctorParameters = () => [
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"] }
];
SocketsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SocketsService);



/***/ }),

/***/ "./src/app/time24to12.pipe.ts":
/*!************************************!*\
  !*** ./src/app/time24to12.pipe.ts ***!
  \************************************/
/*! exports provided: Time24to12Format */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Time24to12Format", function() { return Time24to12Format; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Time24to12Format = class Time24to12Format {
    transform(time) {
        var time24To12 = function (a) {
            //below date doesn't matter.
            return (new Date("1955-11-05T" + a + "Z")).toLocaleTimeString("bestfit", {
                timeZone: "UTC",
                hour12: !0,
                hour: "numeric",
                minute: "numeric"
            });
        };
        return time24To12(time);
    }
};
Time24to12Format = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'time24to12Transform' })
], Time24to12Format);



/***/ }),

/***/ "./src/app/token-intercept.service.ts":
/*!********************************************!*\
  !*** ./src/app/token-intercept.service.ts ***!
  \********************************************/
/*! exports provided: TokenInterceptService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptService", function() { return TokenInterceptService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");



let TokenInterceptService = class TokenInterceptService {
    constructor(injector, _auth) {
        this.injector = injector;
        this._auth = _auth;
    }
    intercept(req, next) {
        let authService = this.injector.get(_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]);
        let tokenizedReq = req.clone({
            setHeaders: {
                Authorization: `Bearer ${authService.getToken()}`
            }
        });
        return next.handle(tokenizedReq);
    }
};
TokenInterceptService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
TokenInterceptService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TokenInterceptService);



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let UserService = class UserService {
    constructor(_http) {
        this._http = _http;
    }
    getSelf(id) {
        return this._http.get('/getSelf/' + id);
    }
    getGymMembers(data) {
        return this._http.post('/getGymMembers', data);
    }
    updateInfo(data) {
        return this._http.post('/updateInfo', data);
    }
    updatePassword(data) {
        return this._http.post('/updatePassword', data);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inner_cover{\n  width: 100%;\n  margin: 0 auto;\n}\n.info_container{\n  width: 50%;\n  margin: auto;\n  padding-top: 130px;\n  color: white;\n}\n.index_container {\n  background: -webkit-gradient( linear, left top, left bottom, from(rgba(0, 0, 0, 0.80)), to(rgba(0, 0, 0, 0.80)) ), url('https://images.unsplash.com/photo-1518644961665-ed172691aaa1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');\n  background: linear-gradient( rgba(0, 0, 0, 0.80), rgba(0, 0, 0, 0.80) ), url('https://images.unsplash.com/photo-1518644961665-ed172691aaa1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');\n  min-height: 100vh;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n\n}\n.lead a {\n  margin-right: 2%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztBQUNoQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkO0FBRUE7RUFDRSxzT0FBNEw7RUFBNUwsNExBQTRMO0VBQzVMLGlCQUFpQjtFQUNqQiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHNCQUFzQjs7QUFFeEI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlubmVyX2NvdmVye1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uaW5mb19jb250YWluZXJ7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZy10b3A6IDEzMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5pbmRleF9jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIHJnYmEoMCwgMCwgMCwgMC44MCksIHJnYmEoMCwgMCwgMCwgMC44MCkgKSwgdXJsKCdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUxODY0NDk2MTY2NS1lZDE3MjY5MWFhYTE/aXhsaWI9cmItMS4yLjEmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xMzUwJnE9ODAnKTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxufVxuXG4ubGVhZCBhIHtcbiAgbWFyZ2luLXJpZ2h0OiAyJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WelcomeComponent = class WelcomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcome',
        template: __webpack_require__(/*! raw-loader!./welcome.component.html */ "./node_modules/raw-loader/index.js!./src/app/welcome/welcome.component.html"),
        styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
    })
], WelcomeComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/admin/Documents/GitHub/fitFriends_angular/public/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map