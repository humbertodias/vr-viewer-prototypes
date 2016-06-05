var files = [];

console.error = window.alert;

window.onerror = function myErrorHandler(errorMsg, url, lineNumber) {
    alert("Error occured: " + errorMsg);//or any message
    return false;
}

function fixTextures(jsonObj, nonJsonFiles){
    var fixed = 0;

    for(i=0; i < jsonObj.materials.length; i++){
        material = jsonObj.materials[i];
        
        material.properties.forEach( function (property){
            if(property.key == '$tex.file' ){
                var parts = property.value.split('\\');
                var img_file_name = parts[parts.length-1];
                // console.log('img_file_name', img_file_name, 'nonJsonFiles', nonJsonFiles);
                
                for(j=0; j<nonJsonFiles.length;j++){
                    if(nonJsonFiles[j].name == img_file_name){

                        randomTextureFile = URL.createObjectURL(nonJsonFiles[i]);
                        property.value = randomTextureFile;
                        fixed++;
                    }
                }
                
            }
        } );
    }    
    console.log('nonJsonFiles.length', nonJsonFiles.length, 'fixed', fixed);
    return (nonJsonFiles.length == fixed);
}    
    
function loadJSONFileOnScene(jsonFile, nonJsonFiles){
    
    nonJsonFiles = nonJsonFiles || [];
    
    var reader = new FileReader();
    reader.onload = function(evt){
        var jsonText = evt.target.result;
        var jsonObj = JSON.parse(jsonText);
        
        var fixed = fixTextures(jsonObj, nonJsonFiles);
        console.log('fixed', fixed);
        scene.add( loader.parse( jsonObj ) );

    };
    reader.onprogress = function(evt){
        var percentComplete=evt.loaded / evt.total * 100;
        console.log(Math.round(percentComplete, 2) + '% downloaded');
    };
    reader.readAsBinaryString(jsonFile);
}    


function loadFile(evt){
    
    for(i =0; i < evt.target.files.length; i++){
        files.push ( evt.target.files[i]);
    }

    renderScene();
}
    
function renderScene(){

    var jsonFiles = [];
    var nonJsonFiles = [];

    for(i =0; i < files.length; i++){
        if(files[i].name.indexOf('.json')>0)
            jsonFiles.push(files[i]);
        else
            nonJsonFiles.push(files[i]);
    }
    
    // if(jsonFiles.length < 1)
    //     throw Error('Json file required!');
    
    jsonFiles.forEach( function(jsonFile){
      loadJSONFileOnScene(jsonFile, nonJsonFiles );  
    });

    gui.toggle();
}  