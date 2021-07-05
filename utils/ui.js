/**
     EXAMPLE:

     constructor() {
       this.minEnergyRemainingPct = { name: 'minEnergyRemainingPct', value: 25 };
       this.minPlanetLevel = { name: 'minPlanetLevel', value: 3 };
       this.crawlDirection = { name: 'crawlDirection', value: ['NE','NW','SW','SE']};
       this.myRadio = {name: 'myRadio', value: ''}; //value == '' || something from options

       // inputs could also be in constructor
       this.inputs = [];
       // Create a stepper
       const minEnergyRemainingPct = {
           name: this.minEnergyRemainingPct.name,
           innerText: 'Min energy remaining pct',
           min: '0',
           max: '100',
           step: '5',
           getValueLabel: (value) => { return `${value}%`; },
           uiType: 'stepper'
       };

       const minPlanetLevel = {
           name: this.minPlanetLevel.name,
           innerText: 'Min planet capture level',
           size: 10,
           getValueLabel: (value) => { return `Level ${value}`; },
           uiType: 'dropdown'
       };

       const crawlDirection = {
           name: this.crawlDirection.name,
           innerText: 'Crawl direction',
           options: ['NX','NW','SW','SE'],
           defaultOptions: this.crawlDirection.value,
           uiType: 'checkbox'
       };

       const myRadio = {
           name: this.myRadio.name,
           innerText: 'Radio test',
           options: ['NE','NW','SW','SE'],
           default: this.myRadio.value,
           uiType: 'radio'
       };

       const myButton = {
         innerHTML: 'log inputs',
         onClick: () => {
           console.log('inputs:\n');
           console.log(this.minEnergyRemainingPct);
           console.log(this.minPlanetLevel);
           console.log(this.crawlDirection);
           console.log(this.myRadio);
         },
         uiType: 'button'
       };


     this.inputs.push(minEnergyRemainingPct);
     this.inputs.push(minPlanetLevel);
     this.inputs.push(crawlDirection);
     this.inputs.push(myRadio);
     this.inputs.push(myButton);
   }
   render(container) {
     container.style.width = '200px';

     console.log(this.inputs);
     buildUi(container, this.inputs, this);
 */

const getValues = (div) => {
   var boxes = div.getElementsByTagName('input');
   var vals = [];
   for(let b of boxes){
     b.checked ? vals.push(b.value) : null ;
   }
   return vals;
};

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

export const buildRadio = (value, name, onClick) => {
    var radio = document.createElement('input');
    radio.type = "radio";
    radio.name = name;
    radio.onclick = onClick;
    radio.id = value;
    radio.value = value;
    // checked ? radio.checked = true : null;
    return radio;
};

export const buildRadios = (radioObj, classObj) => {
    const radioGroup = document.createElement('div');
    const name = radioObj.name;
    //const getValueLabel = radioObj.getValueLabel;
    let radioLabel = document.createElement('label');
    radioLabel.innerText = radioObj.innerText;
    radioLabel.style.display = 'block';
    const onClick = (evt) => {
      console.log('evt', evt.target.value);
      //console.log(evt);
      classObj[name]['value'] = evt.target.value;
      console.log('new val', classObj[name]['value']);
    };
    // radioList = [ {id: 'html', value: 'HTML'}, ]
    const radioList = radioObj.options;
    for (let r of radioList) {
      df.terminal.current.println(`r ${r}`);
      var radio = buildRadio(r, name, onClick);
      let label = document.createElement('label');
      label.for = r;
      label.innerText = r;
      radioGroup.appendChild(radio);
      radioGroup.appendChild(label);
      var br = document.createElement('br');
      radioGroup.appendChild(br);
    }
    return [radioLabel, radioGroup];
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

const buildCheckbox = (value, checked, onClick) => {
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.onclick = onClick;
    checkbox.id = value;
    checkbox.value = value;
    checked ? checkbox.checked = true : null;
    return checkbox;
};

const buildCheckboxes = (checkObj, classObj) => {
  const name = checkObj.name;
  const isInDefault = (option, defaults) => { return defaults.includes(option);};
  const checkbox = document.createElement('div');
  let checkboxLabel = document.createElement('label');
  const onClick = (evt) => {
    classObj[name]['value'] = getValues(checkbox);
    // console.log(`new val ${classObj[name]['value']}`)
  };

  checkboxLabel.innerText = checkObj.innerText;
  const options = checkObj['options'];
  const defaultOptions = checkObj['defaultOptions'];
  options.forEach(o => {
    var label = document.createElement('label');
    var br = document.createElement('br');
    const checked = isInDefault(o, defaultOptions);
    label.appendChild(buildCheckbox(o, checked, onClick));
    label.appendChild(document.createTextNode(o));
    label.appendChild(br);
    checkbox.appendChild(label);
  });

  return [checkboxLabel, checkbox];
};

// builds an HTML button
const buildButton = (buttonObj, classObj) => {
  let button = document.createElement('button');
  button.style.width = '100%';
  button.style.marginBottom = '10px';
  button.innerHTML = buttonObj['innerHTML'];
  button.onclick = buttonObj['onClick'];
  return [button];
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

// In plugin constructor, call: buildUi(container, inputs, this);
// where inputs is the list of type stepObj or dropObj and *this* is the plugin class
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
            case 'checkbox':
                elements.push(buildCheckboxes(obj,classObj));
                break;
            case 'button':
                elements.push(buildButton(obj,classObj));
                break;
            case 'radio':
                elements.push(buildRadios(obj,classObj));
                break;
            default:
                break;
        }
    }
    appendListToDom(container, elements.flat());
};
