// function onClickEvent(){
//     alert('You are doing great!');
// }

function onClickEvent(){
    let myCount = 5;
    console.group('onClickEvent');
    console.error(`You completed ${myCount} exercise`);
    myCount = nestedCount(myCount);
    console.warn(`You completed ${myCount} exercise`);
    console.groupEnd('onClickEvent');

}

function nestedCount(count){
    console.group('nestedCount');
    console.log("I have been changed from FileSystem of Chrome Developer tools");
    console.log('Reached nested call');
    console.groupEnd('nestedCount');

    return count+20;
}