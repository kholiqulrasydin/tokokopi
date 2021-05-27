var functions = [];

class RenderMe{
  constructor(runs, test){
    this.test = test;
    this.functionList = runs;
  }

  runTest(){
    if(this.test){
        console.log('Catching all requirements, welcome to website!');
    }
  }

  runAllFunctions(){
    for(var i = 0; i < functions.length; i++){
      functions[i]();
    }
  }

  runMe(){
    functions = this.functionList;
    return this.runAllFunctions();
  }

}

export default RenderMe;