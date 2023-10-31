ECHO is on.
function range(start=0, stop, step=1){
    list = []
    if(arguments.length == 0) {
        return "Please specify the end of the range"
    }
    else if(arguments.length == 1){
        stop = arguments[0]
    } else if(arguments.length == 2){
        start = arguments[0]
        stop = arguments[1]
        step = 1
    } else if(arguments.length == 3){
        start = arguments[0]
        stop = arguments[1]
        step = arguments[2]
    } else {
        return `range supports only 3 arguments, ${arguments.length} were given`
    }
    for(let i = start; i < stop; i += step){
        list.push(i)
    }
    return list
}