/*
 * Copyright 2014 Red Hat, Inc.
 *
 * Red Hat licenses this file to you under the Apache License, version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License.  You may obtain a copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

/** @module ext-apex-addons-js/o_auth_handler */
var utils = require('vertx-js/util/utils');
var RoutingContext = require('ext-apex-core-js/routing_context');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JOAuthHandler = io.vertx.ext.apex.addons.OAuthHandler;

/**

 @class
*/
var OAuthHandler = function(j_val) {

  var j_oAuthHandler = j_val;
  var that = this;

  /**

   @public
   @param context {RoutingContext} 
   */
  this.handle = function(context) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_oAuthHandler.handle(context._jdel);
    } else utils.invalidArgs();
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_oAuthHandler;
};

/**

 @memberof module:ext-apex-addons-js/o_auth_handler

 @return {OAuthHandler}
 */
OAuthHandler.oauthHandler = function() {
  var __args = arguments;
  if (__args.length === 0) {
    return new OAuthHandler(JOAuthHandler.oauthHandler());
  } else utils.invalidArgs();
};

// We export the Constructor function
module.exports = OAuthHandler;