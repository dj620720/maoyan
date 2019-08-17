import Vue from "vue";
import MessageBox from "./messageBox";

export var messageBox = (function() {
  var defaults = {
    //默认值
    title: "",
    content: "",
    cancel: "",
    ok: "",
    handelCancel: null,
    handelOk: null
  };
  
  var myComponent = Vue.extend(MessageBox);
  return function(opts) {
    for (var attr in opts) {
      defaults[attr] = opts[attr];
    }

    var vm = new myComponent({
      el: document.createElement("div"),
      data: {
        title: defaults.title,
        content: defaults.content,
        cancel: defaults.cancel,
        ok: defaults.ok
      },
      methods: {
        handelCancel() {
             
          defaults.handelCancel && defaults.handelCancel.call(this);
          document.body.removeChild(vm.$el);
        },
        handelOk() {

          defaults.handelOk && defaults.handelOk.call(this);
          document.body.removeChild(vm.$el);
        }
      }
    });
    document.body.appendChild(vm.$el);
  };
})();
