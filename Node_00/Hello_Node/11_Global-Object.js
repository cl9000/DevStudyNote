/**
 * Created by weichanglu on 2017/2/17.
 */
//全局对象
//JavaScript 中有一个特殊的对象，称为全局对象（Global Object），它及其所有属性都可以在程序的任何地方访问，即全局变量。
//在浏览器 JavaScript 中，通常 window 是全局对象， 而 Node.js 中的全局对象是 global，所有全局变量（除了 global 本身以外）都是 global 对象的属性。
//在 Node.js 我们可以直接访问到 global 的属性，而不需要在应用中包含它。

//全局对象与全局变量
//global 最根本的作用是作为全局变量的宿主。
//按照 ECMAScript 的定义，满足以下条 件的变量是全局变量：
//  1 在最外层定义的变量；
//  2 全局对象的属性；
//  3 隐式定义的变量（未定义直接赋值的变量）。
//当你定义一个全局变量时，这个变量同时也会成为全局对象的属性，反之亦然。
// 需要注 意的是，在 Node.js 中你不可能在最外层定义变量，因为所有用户代码都是属于当前模块的， 而模块本身不是最外层上下文。
//注意： 永远使用 var 定义变量以避免引入全局变量，因为全局变量会污染 命名空间，提高代码的耦合风险。

//__filename 表示当前正在执行的脚本的文件名。它将输出文件所在位置的绝对路径，且和命令行参数所指定的文件名不一定相同。
// 如果在模块中，返回的值是模块文件的路径。

// 输出全局变量 __filename 的值
console.log(__filename);

//__dirname 表示当前执行脚本所在的目录。
//输出全局变量 __dirname 的值
console.log( __dirname );

//setTimeout(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。
// ：setTimeout() 只执行一次指定函数。
//返回一个代表定时器的句柄值。
function printHello(){
    console.log( "定时器以执行");
}
// 两秒后执行以上函数
setTimeout(printHello, 2000);

//clearTimeout( t ) 全局函数用于停止一个之前通过 setTimeout() 创建的定时器。
// 参数 t 是通过 setTimeout() 函数创建的定时器
var t = setTimeout(printHello, 1000);
// 清除定时器
clearTimeout(t);

//setInterval(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。
//返回一个代表定时器的句柄值。可以使用 clearInterval(t) 函数来清除定时器。
//setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。
// 两秒后执行函数
//setInterval(printHello, 2000);

//console 用于提供控制台标准输出，它是由 Internet Explorer 的 JScript 引擎提供的调试工具，后来逐渐成为浏览器的事实标准。
function cons(){
    console.log('1');
    console.log('aaaa%dbbbb', 1993);
    console.info('2');
    console.error('3');
    console.warn('4');
    console.dir('5');
    console.time();
    console.timeEnd();
    console.trace();
    console.log('-------------------');
}
setTimeout(cons, 3000);

//实例
console.info("程序开始执行：");
var counter = 10;
console.log("计数: %d", counter);
console.time("获取数据");
//
// 执行一些代码
//
console.timeEnd('获取数据');
console.info("程序执行完毕。");

//Process
function proc(){
    console.log('-------------------');

    //process 是一个全局变量，即 global 对象的属性。
    process.on('exit', function(code) {
        // 以下代码永远不会执行
        setTimeout(function() {
            console.log("该代码不会执行");
        }, 0);
        console.log('退出码为:', code);
    });
    console.log("程序执行结束");


    // 输出到终端
    process.stdout.write("输出到终端!" + "\n");

    // 通过参数读取
    process.argv.forEach(function(val, index, array) {
        console.log('通过参数读取 '+ index + ': ' + val);
    });

    // 获取执行路径
    console.log('获取执行路径: '+process.execPath);

    // 平台信息
    console.log('平台信息: '+ process.platform);

    // 输出当前目录
    console.log('当前目录: ' + process.cwd());

    // 输出当前版本
    console.log('当前版本: ' + process.version);

    // 输出内存使用情况
    console.log('内存使用情况: ' + JSON.stringify(process.memoryUsage()));
}
setTimeout(proc, 4000);