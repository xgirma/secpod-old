exports.index =  function(request, response){
    response.render('index', {
        title: this.apptitle,
        classname: 'home'
    });
};

exports.list = function(request, response){
    response.render('index', {
        title: 'Podcast List',
        classname: 'list'
    });
};

exports.details = function(request, response){
    var name = request.params.name;
    response.render('index', {
        title: name + "'s Podcast Detail",
        classname: 'detail'
    });
};

exports.badroute = function(request, response){
    response.render('index',{
        title: 'You are lost ...',
        classname: 'badroute'
    });
};