async function getModule(url)
{
    let obj = await fetch(url)
 
    let instance  =
    await obj.arrayBuffer()
    .then(src => WebAssembly.compile(src))
    var imports = {
        env: {
            imports: instance.imports,
            wasi_snapshot_preview1: instance.wasiImport
        } 
    }//WebAssembly.Module.imports(instance)
    WebAssembly.instantiate(instance, imports)
    //.then(src => WebAssembly.instantiate(src))
    
    //console.log(imports.env)
    
    //return instance
}