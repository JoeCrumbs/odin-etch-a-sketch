(function() {

    function createSketchGrid(columnNumber) {
        let gridNode;
        let gridNodeCounter = 1;
        let formerElementCounter = null;
        CONTAINER.setAttribute('style','display:grid; grid-template: repeat(' + columnNumber+ ', 1fr) / repeat('
                + columnNumber+ ', 1fr)');
        for (i = 1; i <= columnNumber * columnNumber; i++) {
            gridNode = document.createElement('div');
            gridNode.classList.add('sketch-container__div');
            gridNode.style.backgroundColor = 'rgb(255,255,255)';
            gridNode.dataset.counter = (gridNodeCounter++).toString();

            //use draw functions on touch / hover with mousedown
            gridNode.addEventListener('mouseleave', function() {
                formerElementCounter = setupDrawListener(this, mousePressed, formerElementCounter, false);
            });
            gridNode.addEventListener('touchmove', function(touch) {
                touch.preventDefault();
                el = document.elementFromPoint(touch.touches[0].clientX, touch.touches[0].clientY);
                formerElementCounter = setupDrawListener(el, mousePressed, formerElementCounter, true)
            });
            CONTAINER.appendChild(gridNode);
        }
    }

    function setupDrawListener(el,mousePressed, formerElementCounter, isMobile) {
        // check if element is in drawing grid
        if (el && el.dataset && el.dataset.counter && (mousePressed || isMobile)) {
            curElementCounter = el.dataset.counter;
        } else return null;
        if (curElementCounter !== formerElementCounter) { //only draw when moving to new grid (important for touch)
            if(setting === 'color') {
                el.style.backgroundColor= COLORPICKER.value;
            } else if(setting === 'eraser') { // Erase when eraser is toggled
                el.style.backgroundColor= 'rgb(255,255,255)';
            } else if(setting === 'rgb') { //use random color if rgb is toggled
                el.style.backgroundColor= setRandomRGBColor();
            } else if (setting === 'shade') { // use shade if shade is toggled
                el.style.backgroundColor = decreaseBrightness(el.style.backgroundColor);
            }
        }
        return curElementCounter;
    }

    function setRandomRGBColor() {
        return 'rgb(' + getRandomRGBValue() + ',' + getRandomRGBValue() + ',' + getRandomRGBValue();
    }

    function getRandomRGBValue() {
        let randomValue = Math.floor(Math.random() * 266);
        return randomValue;
    }

    function decreaseBrightness(backgroundColor) {
        let rgbArr = backgroundColor.slice(4,-1)
                                    .split(',')
                                    .map(function(el) {
                                        return (+el - 25).toString();
                                    });
        return 'rgb(' + rgbArr[0] + ',' + rgbArr[1] + ',' + rgbArr[2] + ')';
    }


    //setup all EventListeners
    const CLEAR = document.querySelector('#clear');
    const CONTAINER = document.querySelector('#sketch-container');
    const COLUMN_SLIDER = document.querySelector('#column-number');
    const GRID_TEXT = document.querySelector('#gridsize');
    const COLORPICKER = document.querySelector('#colorpicker');
    const HTML = document.querySelector('html');
    const TOGGLERS = document.querySelectorAll('input[type=radio]');
    let mousePressed = false;

    //setum EventListeners for Toggle Settings
    let setting = 'color';
    TOGGLERS.forEach(function(toggler) {
        toggler.addEventListener('change', function() {
            setting = this.id;
        });
    });

    //setup EventListeners for mousedown solution
    HTML.addEventListener('mousedown', function() {
        mousePressed = true;
    });
    HTML.addEventListener('mouseup', function() {
        mousePressed = false;
    });

    CLEAR.addEventListener('click', function() {
        CONTAINER.innerHTML = '';
        let columnNumber = COLUMN_SLIDER.value;
        createSketchGrid(columnNumber);
    });

    COLUMN_SLIDER.addEventListener('change',function() {
        GRID_TEXT.textContent = this.value + ' x ' + this.value;
    });

    createSketchGrid(50);
})();