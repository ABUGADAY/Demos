//邮箱校验 校验邮箱是否存在@gmial.com
(function(){
  'use strict'
  var App = window.App || {};
  var Validation = {
    isCompanyEmail:function(email){
      return /.+@gmail\.com$/.test(email);
    }
  }
  App.Validation = Validation;
  window.App = App;
})(window)
