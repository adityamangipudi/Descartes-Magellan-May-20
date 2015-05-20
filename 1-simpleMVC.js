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


function Controller(name, model, fn) {

    var scope = new fn();

    // get the view - function
    var view = document.querySelector('[data-controller="' + name + '"]');
    console.log(view); // todo: replace this with test code
    // register view on model
    model.register(view);
    console.log(model.views); // todo: replace this with test code

    // resolve event listeners
    // search for data-<events>
    // parse the function name and parameters
    // register an event listener on the elements



    registerEvents(this, view); // convert to a prototype method


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


// utilities

function registerEvents(controller, view_element) {
    // search for markers - currently only looking for data-change
    // change this to work with any number of supporetd events
    var elements = Array.prototype.slice.call(view_element.querySelectorAll('[data-change]'));

    // map each element to the function
    var functions = elements.map(function (element) {

        // extract the function name and function parameters
        var fnname, fnparams; // fnname = setName

        // register the event listnener

        element.addEventListener('change', function (e) {
            controller[fnname].apply(controller, fnparams);
        });

        return element.getAttribute('data-change');
    });

    console.log(functions); // todo: replace this with test code

}

function parseFunctionString(fn_string) {
    var arr = fn_string.match(/^([^(]+)\(([^)]+)/);

    var params = [];
    if (arr[2]) {
        params = arr[2].split(',').map(function (param) {
            return param.trim();
        });
    }

    return {
        name: arr[1],
        params: params
    }
}





