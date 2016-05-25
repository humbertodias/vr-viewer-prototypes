window.onload = function () {
    document.getElementById('fileInput').addEventListener('change', handleFileSelect , false);
}


function loadFile(extension) {
    f = document.getElementById('fileInput');
    f.setAttribute('accept', extension);
    f.click();
}


function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object
//    var filePath = files[0].value;
    
    var fileFbx;
    for (var i = 0, f; f = files[i]; i++) {

        var tmppath = URL.createObjectURL(event.target.files[0]);
        console.log('f', f)
        console.log("filePath", tmppath);

        if(f.name.indexOf('fbx')>0)
            fileFbx=tmppath;

    }

    if(fileFbx)
    carregar(fileFbx);
    // files is a FileList of File objects. List some properties.
    var output = [];
    for (var i = 0, f; f = files[i]; i++) {
        output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - '
            , f.size, ' bytes, last modified: '
            , f.lastModifiedDate.toLocaleDateString(), '</li>');
    }
//    document.getElementById('output').innerHTML = '<ul>' + output.join('') + '</ul>';
    console.log( '<ul>' + output.join('') + '</ul>' );

}

