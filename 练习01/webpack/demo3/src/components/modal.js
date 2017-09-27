import './modal.less';
// import tpl from './modal.html';
import tpl from './modal.ejs'
let modal = function(){
    return {
        'component-name' : 'modal',
        'tpl' : tpl
    }
}
export default modal;