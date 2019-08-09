const options = {
  state: {
    options:[],
    activeRoute: '/index',
    activeRouteName: '总览',
    activeDate: '',
    asider_width:'200px'
  },
  mutations: {
    set_active_index(state, index) {
      this.state.activeRoute = index
      this.state.activeDate = index
    },
    add_tabs (state, data) {
      console.log(data);
      let options = this.state.options;
      for(let i in options){
        if(data.route == options[i].route){
          return;
        }
      }
      this.state.options.push(data);
    },
    delete_tabs (state, route) {
      let index = 0;
      for (let option of state.options) {
        if (option.route === route) {
          break;
        }
        index++;
      }
      this.state.options.splice(index, 1);
    }
  }
}
// 生成 mutations 方法
function generate(name) {
  return function (state, value) {
    state[name] = value || state[name];
  }
}
// 为每个 state 字段生成对应的 mutations 方法
Object.keys(options.state).forEach((key) => {
  options.mutations[key] = generate(key);
});
export default options;
