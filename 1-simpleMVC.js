// todo: convert the comments to jsdoc
// todo: write test cases for the Controller and Model using Jasmine

// model constructor
    // params - data, Object

    // prototype methods
    //  - register: adds a view to a list of views for the model
    //  - update: runs an update on all the views for the model
    //  - set: takes a key and value pair to update the model

// controller constructor
    // params - name of constructor, String | model, Object

    // actions - gets the appropriate view, based on the name of the controller
    // sets it as a view on the model, using model.register


function Controller(name, model) {
    // get the view - function
    var view = document.querySelector('[data-controller="' + name + '"]');
    console.log(view); // todo: replace this with test code
    // register view on model
    model.register(view);
    console.log(model.views); // todo: replace this with test code
}

function Model(data) {
    this.data = data;
    this.views = [];
}

Model.prototype.register = function (view) {
    // push the view into the list of views
    this.views.push(view);
};
Model.prototype.update = function (key, value) {
    // loop over all the views of the model
    // and update the information in each view

    this.views.forEach(function (elem) {
        var elements = elem.querySelectorAll('[data-bind="' + key + '"]');
        Array.prototype.forEach.call(elements, function (element) {
            element.innerHTML = value;
        });
        console.log(elements);
    });
};
Model.prototype.set = function (key, value) {
    // set the data
    this.data[key] = value;
    // call update
    this.update(key, value);
};





