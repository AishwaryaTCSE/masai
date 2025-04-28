
function createFunctionRegistry(){
    const functions={};
    return{
        registerFunction(name, fn){
            functions[name]=fn;
        },
        executeFunction(name, args=[], context=null){
            const func =functions[name];
            if(!func) {
                throw new Error(`Function "${name}" is not registerd.`)
            }
            return func.apply(context, args);
            },
           mapFunction(name, dataArray) {
            const func =functions[name];
            if(!func) {
                throw new Error(`Function "${name}" is not registerd.`)
            }
            return dataArray.map(func)
           },
           filterFunction(name, dataArrya){
            const func =functions[name];
            if(!func) {
                throw new Error(`Function "${name}" is not registerd.`)
            }
            return dataArray.filter(func)
           },
           reduceFunction(name, dataArray, initialValue){
            const func =functions[name];
            if(!func) {
                throw new Error(`Function "${name}" is not registerd.`)
            }
            return dataArray.reduce(func, initialValue)
           },
           executeFunctionAsync(name, args=[], delay=0){
            const func =functions[name];
            if(!func) {
                throw new Error(`Function "${name}" is not registerd.`)
            }
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    resolve(func(...args));
                },delay);
            });
           },
           exportRegistry(){
            return JSON.stringify(Object.keys(functions));
           }
        };
    }
    const registry = createFunctionRegistry();
    registry.registerFunction("double", x => x * 2);
    console.log(registry.executeFunction("double", [5]));
    
    registry.executeFunctionAsync("double", [4], 2000).then(console.log);

