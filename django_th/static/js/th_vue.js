Vue.use('axios');
var data = {'message': 'TriggerHappy w/ VueJS w/o NPM is FUN !'};
// axios.defaults.baseURL = process.env.SERVER_URL

// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

var delimiters = ['${', '}'];

Vue.component('trigger', {
  template: '<a class=""><slot></slot></a>'
})

Vue.component('triggers', {

  delimiters: this.delimiters,
  template: '' +
  '<div class="triggers">\n'+
  '<trigger v-for="trigger in my_triggers" :key="trigger.id">\n' +
  '<div :id="\'trigger-record-\' + trigger.id " class="trigger-record col-xs-12 col-md-12 col-lg-12">\n' +
  '    <div class="col-xs-7 col-md-7 col-lg-7">\n' +
  '        <a class="btn btn-sm btn-md btn-lg btn-default" :href="\'url edit_trigger \' + trigger.id" title="Edit the description"> ${ trigger.description }</a>\n' +
  '        <a class="btn btn-sm btn-md btn-lg btn-default" :href="\'url edit_provider \' + trigger.id " :title="\'Edit your service \' + trigger.description " >${ trigger.description } <i :class="\'fa fa-\' + trigger.provider.name " aria-hidden="true"></i></a>\n' +
  '        <a class="btn btn-sm btn-md btn-lg btn-default" :href="\'url edit_consumer \' + trigger.id " :title="\'Edit your service \' + trigger.description " >${ trigger.description } <i :class="\'fa fa-\' + trigger.provider.name " aria-hidden="true"></i></a>\n' +
  '    </div>\n'+
  '    <div class="col-xs-5 col-md-5 col-lg-5">\n' +
  '       <a class="btn btn-sm btn-md btn-lg btn-default"  href="#" title="Fire this trigger now !"><span class="glyphicon glyphicon-fire icon-white"></span></a>\n'+
  '       <a class="btn btn-sm btn-md btn-lg btn-primary" href="#" title="Set this trigger off"><span class="glyphicon glyphicon-off icon-white"></span></a>\n'+
  '       <a class="btn btn-sm btn-md btn-lg btn-success" href="#" title="Set this trigger on"><span class="glyphicon glyphicon-off icon-white"></span></a>\n'+
  '       <a class="btn btn-sm btn-md btn-lg btn-danger" :href="\'delete_trigger \' + trigger.id " title="Delete this trigger ?"><span class="glyphicon glyphicon-trash icon-white"></span></a><br/>\n'+
  '   </div>\n' +
  '   <footer>\n'+
  '       <div :id="\'trigger-footer-\' + trigger.id " class="col-xs-12 col-md-12 col-lg-12">\n'+
  '           <p>\n'+
  '           <span class="glyphicon glyphicon-calendar"></span>&nbsp;Created&nbsp;${ trigger.date_created }&nbsp;-&nbsp;\n'+
  '           <span class="glyphicon glyphicon-calendar"></span>&nbsp;Triggered&nbsp;<span v-if="trigger.date_triggered">${ trigger.date_triggered }</span><span v-else &nbsp;Never triggered</span>\n'+
  '           </p>\n'+
  '           <p class="text-ok"><a :href="\'url edit_consumer \' + trigger.id " >Click here to see your Feeds URL for ${ trigger.provider.name }</a></p>\n'+
  '           <p class="text-info">\n'+
  '           <span class="glyphicon glyphicon-bullhorn"></span> ${ trigger.result } - ${ trigger.date_result }\n'+
  '           <br>\n'+
  '           <span class="badge">${ trigger.counter_ok }</span>ran successfully - <span class="badge">${ trigger.counter_ko }</span> failed\n'+
  '           </p>\n'+
  '       </div>\n'+
  '   </footer>\n'+
  '</div>\n' +
  '</trigger>\n'+
  '</div>'  ,
  data: function () {
    return {
      my_triggers: []
    }
  },
  mounted () {

    axios.get('/th/api/vue/triggers-list/')
      .then(res => {
        this.my_triggers = res.data.results;
        console.log(this.my_triggers)
        console.log(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
});

Vue.component('my-component', {

  delimiters: this.delimiters,
  template: '<div class="alert alert-success">${ message }</div>',
  data: function () {
    return {
      message: ''
    }
  },
  mounted () {

    axios.get('/th/vue/test')
      .then(res => {
        this.message = res.data;
        console.log(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
});


new Vue({
  el: '#app'
});
