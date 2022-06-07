//
function getName(object){
    return object.name
}



function getNames(object) {
    let arr = [object.firstname, object.lastname];
    return arr
  }




function concatNames(obj, lastname) {
    let arr = `${obj.firstname} ${lastname}`
    return arr
  }



  function correctName (object) {
    if(object.fathername === undefined){
      return object.firstname
    }else{
      return `${object.firstname} ${object.lastname} ${object.fathername}`
    }
  }