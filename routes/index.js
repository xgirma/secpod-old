exports.index =  function(request, response){
    response.render('index', {
        title: this.apptitle
    });
};

exports.list = function(request, response){
    response.render('list', {
        title: 'Podcast List'
    });
};

exports.details = function(request, response){
    var name = request.params.name;
    response.render('detail', {
        title: name + "'s Podcast Detail"
    });
};

exports.badroute = function(request, response){
    response.render('badroute',{
        title: 'You are lost create a podcast :) ...'
    });
};