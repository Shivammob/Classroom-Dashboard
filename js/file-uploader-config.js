$(document).ready(function(){
    $(".fileUploader").fileinput({
        theme: "fas",
        uploadUrl: "/file-upload-batch/2",
        showUpload: true,
        showCaption: false,
        showRemove: false,
        minFileCount: 1,
        maxFileCount: 8,
        browseClass: "btn btn-outline-primary rounded z-depth-0 m-0 p-0 mt-3 btn-browse",
        removeClass: "btn btn-sm m-0 z-depth-0",
        uploadClass: "btn btn-primary rounded z-depth-0 m-0 p-0 mt-3 btn-upload",
        cancelClass: "btn btn-default float-right rounded z-depth-0 m-0 p-0 mt-3 btn-cancel",
        overwriteInitial: false,
        initialPreviewAsData: true, // defaults markup
        initialPreviewConfig: [ {
            frameAttr: {
                title: 'My Custom Title',
            }
        }],
        uploadExtraData: {
            img_key: "1000",
            img_keywords: "happy, nature"
        },
        fileActionSettings: {
            showZoom: false,
            showUpload: false,
            //indicatorNew: "",
            showDrag: false
        },
        preferIconicPreview: true, // this will force thumbnails to display icons for following file extensions
        previewFileIconSettings: { // configure your icon file extensions
        'doc': '<i class="fas fa-file-word ic-file-word color-doc"></i>',
        'xls': '<i class="fas fa-file-excel ic-file-excel color-excel"></i>',
        'ppt': '<i class="fas fa-file-powerpoint ic-file-ppt color-ppt"></i>',
        'pdf': '<i class="fas fa-file-pdf ic-file-pdf color-ppt"></i>',
        'zip': '<i class="fas fa-file-archive ic-file text-primary"></i>',
        'htm': '<i class="fas fa-file-code ic-file text-primary"></i>'
        //'txt': '<i class="fas fa-file-alt ic-file"></i>',
        //'mov': '<i class="fas fa-file-video ic-file"></i>',
        //'mp3': '<i class="fas fa-file-audio ic-file"></i>'
        // note for these file types below no extension determination logic
        // has been configured (the keys itself will be used as extensions)
        //'jpg': '<i class="fas fa-file-image ic-file-img"></i>',
        //'jpeg': '<i class="fas fa-file-image ic-file-img"></i>',
        //'gif': '<i class="fas fa-file-image ic-file-img"></i>',
        //'png': '<i class="fas fa-file-image ic-file-img"></i>'
        },
        previewSettings: {
        image: { width: "50px", height: "auto" },
        html: { width: "50px", height: "auto" },
        other: { width: "50px", height: "auto" }
        },
        previewFileExtSettings: { // configure the logic for determining icon file extensions
        'doc': function (ext) {
        return ext.match(/(doc|docx)$/i);
        },
        'xls': function (ext) {
        return ext.match(/(xls|xlsx)$/i);
        },
        'ppt': function (ext) {
        return ext.match(/(ppt|pptx)$/i);
        },
        'zip': function (ext) {
        return ext.match(/(zip|rar|tar|gzip|gz|7z)$/i);
        },
        'htm': function (ext) {
        return ext.match(/(htm|html)$/i);
        },
        'txt': function (ext) {
        return ext.match(/(txt|ini|csv|java|php|js|css)$/i);
        },
        'mov': function (ext) {
        return ext.match(/(avi|mpg|mkv|mov|mp4|3gp|webm|wmv)$/i);
        },
        'mp3': function (ext) {
        return ext.match(/(mp3|wav)$/i);
        }
        },
    });
});