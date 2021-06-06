export const buildStepper = (stepObj, classObj) => {
    const name = stepObj.name;
    const getValueLabel = stepObj.getValueLabel;
    let stepperLabel = document.createElement('label');
    stepperLabel.innerText = stepObj.innerText;
    stepperLabel.style.display = 'block';
    let stepper = document.createElement('input');
    stepper.type = 'range';
    stepper.min = stepObj.min;
    stepper.max = stepObj.max;
    stepper.step = stepObj.step;
    stepper.value = classObj[name]['value'];
    stepper.style.width = '80%';
    stepper.style.height = '24px';
    let stepperValue = document.createElement('span');
    stepperValue.innerText = `${getValueLabel(stepper.value)}`;
    stepperValue.style.float = 'right';
    stepper.onchange = (evt) => {
        stepperValue.innerText = `${getValueLabel(evt.target.value)}`;
        try {
            // update of class Object
            classObj[name]['value'] = parseInt(evt.target.value, 10); // assuming values are integers
        }
        catch (e) {
            console.error(`could not parse ${name}`, e);
        }
    };
    return [stepperLabel, stepper, stepperValue];
};
// Returns an array: [levelLabel, level]
// Need to pass class instance in order to update variables.
// Append to the DOM in given order.
export const buildDropdown = (dropObj, classObj) => {
    const getValueLabel = dropObj.getValueLabel;
    const name = dropObj['name'];
    let levelLabel = document.createElement('label');
    levelLabel.innerText = dropObj.innerText;
    levelLabel.style.display = 'block';
    let level = document.createElement('select');
    level.style.background = 'rgb(8,8,8)';
    level.style.width = '100%';
    level.style.marginTop = '10px';
    level.style.marginBottom = '10px';
    Array.from(Array(dropObj.size).keys()).forEach(lvl => {
        let opt = document.createElement('option');
        opt.value = `${lvl}`;
        opt.innerText = `${getValueLabel(lvl)}`;
        level.appendChild(opt);
    });
    level.value = `${classObj[name]['value']}`;
    level.onchange = (evt) => {
        try {
            classObj[name]['value'] = parseInt(evt.target.value, 10);
        }
        catch (e) {
            console.error(`could not parse ${name}`, e);
        }
    };
    return [levelLabel, level];
};

// appends elements to the DOM from list.
export const appendListToDom = (container, eltList) => {
    try {
        for (const [index, elt] of eltList.entries()) {
            container.appendChild(elt);
        }
    }
    catch (e) {
        console.log('append to DOM error', e);
    }
};

export const buildUi = (container, objList, classObj) => {
    let elements = [];
    for (const obj of objList) {
        switch (obj.uiType) {
            case 'dropdown':
                elements.push(buildDropdown(obj, classObj));
                break;
            case 'stepper':
                elements.push(buildStepper(obj, classObj));
                break;
            default:
                break;
        }
    }
    appendListToDom(container, elements.flat());
};