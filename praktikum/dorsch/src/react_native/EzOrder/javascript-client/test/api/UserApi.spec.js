/*
 * EzOrder Backend
 * API Description for EzOrder Rest-Backend
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.27
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.EzOrderBackend);
  }
}(this, function(expect, EzOrderBackend) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new EzOrderBackend.UserApi();
  });

  describe('(package)', function() {
    describe('UserApi', function() {
      describe('createUser', function() {
        it('should call createUser successfully', function(done) {
          // TODO: uncomment, update parameter values for createUser call
          /*
          var body = new EzOrderBackend.User();
          body.userID = "0";
          body.lastname = "";
          body.firstname = "";
          body.email = "";
          body.phone = "";
          body.authToken = "";
          body.street = "";
          body.zip = "";
          body.city = "";
          body.company = "";
          body.department = "";

          instance.createUser(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteUser', function() {
        it('should call deleteUser successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteUser call
          /*
          var userid = "userid_example";

          instance.deleteUser(userid, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getUserByName', function() {
        it('should call getUserByName successfully', function(done) {
          // TODO: uncomment, update parameter values for getUserByName call and complete the assertions
          /*
          var userid = "userid_example";

          instance.getUserByName(userid, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(EzOrderBackend.User);
            expect(data.userID).to.be.a('number');
            expect(data.userID).to.be("0");
            expect(data.lastname).to.be.a('string');
            expect(data.lastname).to.be("");
            expect(data.firstname).to.be.a('string');
            expect(data.firstname).to.be("");
            expect(data.email).to.be.a('string');
            expect(data.email).to.be("");
            expect(data.phone).to.be.a('string');
            expect(data.phone).to.be("");
            expect(data.authToken).to.be.a('string');
            expect(data.authToken).to.be("");
            expect(data.street).to.be.a('string');
            expect(data.street).to.be("");
            expect(data.zip).to.be.a('string');
            expect(data.zip).to.be("");
            expect(data.city).to.be.a('string');
            expect(data.city).to.be("");
            expect(data.company).to.be.a('string');
            expect(data.company).to.be("");
            expect(data.department).to.be.a('string');
            expect(data.department).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getUsers', function() {
        it('should call getUsers successfully', function(done) {
          // TODO: uncomment getUsers call and complete the assertions
          /*

          instance.getUsers(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(EzOrderBackend.User);
              expect(data.userID).to.be.a('number');
              expect(data.userID).to.be("0");
              expect(data.lastname).to.be.a('string');
              expect(data.lastname).to.be("");
              expect(data.firstname).to.be.a('string');
              expect(data.firstname).to.be("");
              expect(data.email).to.be.a('string');
              expect(data.email).to.be("");
              expect(data.phone).to.be.a('string');
              expect(data.phone).to.be("");
              expect(data.authToken).to.be.a('string');
              expect(data.authToken).to.be("");
              expect(data.street).to.be.a('string');
              expect(data.street).to.be("");
              expect(data.zip).to.be.a('string');
              expect(data.zip).to.be("");
              expect(data.city).to.be.a('string');
              expect(data.city).to.be("");
              expect(data.company).to.be.a('string');
              expect(data.company).to.be("");
              expect(data.department).to.be.a('string');
              expect(data.department).to.be("");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateUser', function() {
        it('should call updateUser successfully', function(done) {
          // TODO: uncomment, update parameter values for updateUser call
          /*
          var userid = "userid_example";
          var body = new EzOrderBackend.User();
          body.userID = "0";
          body.lastname = "";
          body.firstname = "";
          body.email = "";
          body.phone = "";
          body.authToken = "";
          body.street = "";
          body.zip = "";
          body.city = "";
          body.company = "";
          body.department = "";

          instance.updateUser(userid, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
