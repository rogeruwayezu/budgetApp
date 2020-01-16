
// Budget Controller
var budgetControler = (function () {


})()


// UI Controller
var UIController = (function () {

    return {
        getInput: function () {

            return {
                type: document.querySelector('.add__type').value,
                description: document.querySelector('.add__description').value,
                value: document.querySelector('.add__value').value,
            };

        }
    }
})()


//Global App Controller
var controller = (function (budgetControler, UIController) {

    function ctrlAddItem() {
        // 1. Get the input data

        var input = UIController.getInput()

        // 2. add the item to the budget controller

        // 3. add the item to the UI

        // 4. calculate the budget

        // 5. Display the budget to the UI

        console.log(input)
    }
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem)



    // Event listener for the keyboard
    document.addEventListener('keypress', function (event) {
        if (event.keyCode == 13 || event.which == 13) {
            ctrlAddItem()
        }
    })
})(budgetControler, UIController)

