function addToList() {
    var taskTitle = document.getElementById('task-title').value;
    if (taskTitle.length > 0) {
        // craete li
        var newLi = document.createElement("li");
        // set class attributes to li
        newLi.setAttribute('class', 'list-group-item d-flex justify-content-between align-items-center border-0 mb-2 rounded')
        // create task span title
        var newSpan = document.createElement('span');
        // text form input
        var textSpan = document.createTextNode(taskTitle);
        // append text to span
        newSpan.appendChild(textSpan);
        // append span to li
        newLi.appendChild(newSpan);
        // create div
        var newDiv = document.createElement('div');
        // set class attributes to div
        newDiv.setAttribute('class', 'task-actions');
        // create ✓ button
        var newBtn = document.createElement('button');
        // set onclick attribute to ✓ btn     
        newBtn.setAttribute('onclick', 'doneTask(this)');
        // set class attributes to button
        newBtn.setAttribute('class', 'btn btn-success task-done');
        var newBtnText = document.createTextNode("✓");
        // append text to button
        newBtn.appendChild(newBtnText);
        // create X button
        var newBtn2 = document.createElement('button');
        // set onclick attribute to X btn     
        newBtn2.setAttribute('onclick', 'removeTask(this)');
        // set class attributes to button
        newBtn2.setAttribute('class', 'btn btn-danger task-done ms-1');
        var newBtn2Text = document.createTextNode("X");
        // append text to button
        newBtn2.appendChild(newBtn2Text);
        // append first button to div
        newDiv.appendChild(newBtn);
        // append second button to div
        newDiv.appendChild(newBtn2);
        // select ul
        var ulList = document.getElementById('task-list');
        // append div to li
        newLi.appendChild(newDiv);
        // append li to ul
        ulList.appendChild(newLi);
        // clear input value
        document.getElementById('task-title').value = "";
    } else {
        alert("can't add empty task");
    }

} // end of add to list function



function doneTask(elem) {
    elem.parentNode.parentNode.classList.add('done');

} // end of done task function

function removeTask(elem) {
    elem.parentNode.parentNode.remove();

} // end of remove task from list function