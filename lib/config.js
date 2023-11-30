// toastr.options = {
//     "closeButton": false,
//     "debug": false,
//     "newestOnTop": false,
//     "progressBar": true,
//     "positionClass": "toast-top-right",
//     "preventDuplicates": false,
//     "onclick": null,
//     "showDuration": "300",
//     "hideDuration": "1000",
//     "timeOut": "3000",
//     "extendedTimeOut": "1000",

//     //"showEasing": "swing",
//     //"hideEasing": "linear",
//     "showEasing": 'easeOutExpo',
//     "hideEasing": 'easeInExpo',
//     "closeEasing": 'easeInExpo',
//     //"showMethod": "fadeIn",
//     //"hideMethod": "fadeOut"
//     "showMethod": "slideDown",
//     "hideMethod": "slideUp",
//     "closeMethod":"slideUp",
//     //"onShown": function() { console.log('hello'); },
//     //"onHidden": function() { console.log('goodbye'); },
//     //"onclick": function() { console.log('clicked'); },
//     //"onCloseClick": function() { console.log('close button clicked'); },

// }

toastr.options = {
    closeButton: false, // 是否显示关闭按钮，（提示框右上角关闭按钮）
    debug: false, // 是否使用deBug模式
    progressBar: true, // 是否显示进度条，（设置关闭的超时时间进度条）
    positionClass: "toast-top-right", // 设置提示款显示的位置
    onclick: null, // 点击消息框自定义事件 
    showDuration: "300", // 显示动画的时间
    hideDuration: "1000", //  消失的动画时间
    timeOut: "2000", //  自动关闭超时时间 
    extendedTimeOut: "1000", //  加长展示时间
    showEasing: "swing", //  显示时的动画缓冲方式
    hideEasing: "linear", //   消失时的动画缓冲方式
    showMethod: "fadeIn", //   显示时的动画方式
    hideMethod: "fadeOut" //   消失时的动画方式
};