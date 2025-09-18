function fun(){
    let x = 10;
    console.log("Inside fun");
}

function gun(y){
    console.log("Inside gun");
    fun();
    console.log("Completed fun");
}

function run() {
    var z = 9;
    gun();
    console.log("exit");
}

run();