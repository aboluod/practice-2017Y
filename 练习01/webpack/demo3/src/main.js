import modal from './components/modal.js';
import './css/style.css';
let App = function(){
    console.log('项目入口文件main.js');
    var oApp = document.querySelector('#app');
    var oModal = new modal();
    oApp.innerHtml = oModal.tpl({
        name : 'zhangbo',
        arr : ['zhangbo','suqin','zhangyi'],
    });
}
new App();