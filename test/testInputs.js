'use strict';

var assert = require('assert')
  , validator = require('./../index')
  ;

describe('Validator - inputs', function(){

  it('Should throw if opts.format is not specified', function(done){

    var opts = {};

    validator(opts, function(err, data){
      assert.throws(function(){
          if(err) throw err;
        }, function(err){
          if((err instanceof Error) && /Missing required param: format/.test(err)){
            return true
          }
        },
        "Unexpected error"
      );
      done();
    });

  });

  /*
  it('Should throw if opts.url is not specified', function(done){

    var opts = {};

    validator(opts, function(err, data){
      assert.throws(function(){
          if(err) throw err;
        }, function(err){
          if((err instanceof Error) && /Missing required param: url/.test(err)){
            return true
          }
        },
        "Unexpected error"
      );
      done();
    });

  });

  it('Should throw if opts.data is not specified', function(done){

    var opts = {};

    validator(opts, function(err, data){
      assert.throws(function(){
          if(err) throw err;
        }, function(err){
          if((err instanceof Error) && /Missing required param: data/.test(err)){
            return true
          }
        },
        "Unexpected error"
      );
      done();
    });

  });
  */
});