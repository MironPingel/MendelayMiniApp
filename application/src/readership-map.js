
var getDocuments = function () {
    MendeleySDK.API.documents
        .list()
        .done(function (docs) {
            addSources(docs);
        })
};
