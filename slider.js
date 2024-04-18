var slider = new expSlider(1, 5000, 1, 20000);

/*
window.onload = function() {
    hz.min = Math.round(slider1.pos(20)); // Set min of slider to 20Hz
    hz.value = slider1.pos(440); // Set default slider position to 440Hz
}
*/ // To prevent some visual artifacts upon site load and speed things up, the above
   // results were hard-coded in into the HTML, since they returned the same values
   // every time. They are shown here for posterity, I guess.




// Cross-updating functions for tone 1
var hz1 = document.getElementById("hz1");
var hzval1 = document.getElementById("hzval1");
var times1 = document.getElementById("times1");
var type1 = document.getElementById("type1");
var pitch1 = document.getElementById("pitch1");
var vol1 = document.getElementById("vol1");

hz1.oninput = function() {
    hzShift(tone1, this, hzval1, pitch1);
}
hzval1.onchange = function() {
    hzvalShift(tone1, hz1, this, pitch1);
}
times1.onchange = function() {
    timesShift(tone1, hz1, hzval1, pitch1, this);
}
type1.oninput = function() {
    typeShift(tone1, this);
}
vol1.oninput = function() {
    volShift(tone1, this);
}

// Cross-updating functions for tone 2
var hz2 = document.getElementById("hz2");
var hzval2 = document.getElementById("hzval2");
var times2 = document.getElementById("times2");
var type2 = document.getElementById("type2");
var pitch2 = document.getElementById("pitch2");
var vol2 = document.getElementById("vol2");

hz2.oninput = function() {
    hzShift(tone2, this, hzval2, pitch2);
}
hzval2.onchange = function() {
    hzvalShift(tone2, hz2, this, pitch2);
}
times2.onchange = function() {
    timesShift(tone2, hz2, hzval2, pitch2, this);
}
type2.oninput = function() {
    typeShift(tone2, this);
}
vol2.oninput = function() {
    volShift(tone2, this);
}

// Cross-updating functions for tone 3
var hz3 = document.getElementById("hz3");
var hzval3 = document.getElementById("hzval3");
var times3 = document.getElementById("times3");
var type3 = document.getElementById("type3");
var pitch3 = document.getElementById("pitch3");
var vol3 = document.getElementById("vol3");

hz3.oninput = function() {
    hzShift(tone3, this, hzval3, pitch3);
}
hzval3.onchange = function() {
    hzvalShift(tone3, hz3, this, pitch3);
}
times3.onchange = function() {
    timesShift(tone3, hz3, hzval3, pitch3, this);
}
type3.oninput = function() {
    typeShift(tone3, this);
}
vol3.oninput = function() {
    volShift(tone3, this);
}

// Cross-updating functions for tone 4
var hz4 = document.getElementById("hz4");
var hzval4 = document.getElementById("hzval4");
var times4 = document.getElementById("times4");
var type4 = document.getElementById("type4");
var pitch4 = document.getElementById("pitch4");
var vol4 = document.getElementById("vol4");

hz4.oninput = function() {
    hzShift(tone4, this, hzval4, pitch4);
}
hzval4.onchange = function() {
    hzvalShift(tone4, hz4, this, pitch4);
}
times4.onchange = function() {
    timesShift(tone4, hz4, hzval4, pitch4, this);
}
type4.oninput = function() {
    typeShift(tone4, this);
}
vol4.oninput = function() {
    volShift(tone4, this);
}

// Cross-updating functions for tone 5
var hz5 = document.getElementById("hz5");
var hzval5 = document.getElementById("hzval5");
var times5 = document.getElementById("times5");
var type5 = document.getElementById("type5");
var pitch5 = document.getElementById("pitch5");
var vol5 = document.getElementById("vol5");

hz5.oninput = function() {
    hzShift(tone5, this, hzval5, pitch5);
}
hzval5.onchange = function() {
    hzvalShift(tone5, hz5, this, pitch5);
}
times5.onchange = function() {
    timesShift(tone5, hz5, hzval5, pitch5, this);
}
type5.oninput = function() {
    typeShift(tone5, this);
}
vol5.oninput = function() {
    volShift(tone5, this);
}

// Cross-updating functions for tone 6
var hz6 = document.getElementById("hz6");
var hzval6 = document.getElementById("hzval6");
var times6 = document.getElementById("times6");
var type6 = document.getElementById("type6");
var pitch6 = document.getElementById("pitch6");
var vol6 = document.getElementById("vol6");

hz6.oninput = function() {
    hzShift(tone6, this, hzval6, pitch6);
}
hzval6.onchange = function() {
    hzvalShift(tone6, hz6, this, pitch6);
}
times6.onchange = function() {
    timesShift(tone6, hz6, hzval6, pitch6, this);
}
type6.oninput = function() {
    typeShift(tone6, this);
}
vol6.oninput = function() {
    volShift(tone6, this);
}


// The four general functions below borrow functions from tones.js;
// Each is designed to keep every input for a specific tone updated with one another's values

// General function on hz range input object; updates tone oscillator frequency, hzvalue number, and blanks pitch value
// Note that actual sounding frequency references hzval, so rounding to integers isn't misinformation
function hzShift(tone, hzslider, hzvalue, pitch) {
    hzvalue.value = Math.round(slider.freq(hzslider.value));
    tone.setHz(hzvalue.value);
    pitch.value = '';
}

// General function on hz value input object; updates tone oscillator frequency, hz slider position, and blanks pitch value
function hzvalShift(tone, hzslider, hzvalue, pitch) {
    if (hzvalue.value < 20) { // lower bound
        hzvalue.value = 20;
    }
    else if (hzvalue.value > 20000) { // upper bound
        hzvalue.value = 20000;
    }

    hzslider.value = slider.pos(hzvalue.value);
    tone.setHz(hzvalue.value);
    pitch.value = '';
}

// General function on times factor input object; updates hz value, changes all else as needed, blanks times factor
// Was going to use eval here, but thought better of it; this prevents out-of-range factors, negatives, etc.
function timesShift(tone, hzslider, hzvalue, pitch, times) {
    var val = times.value;

    // for fractions
    slashindex = val.indexOf('/');
    if (slashindex != -1) {
        var num = val.substring(0, slashindex);
        var denom = val.substring(slashindex + 1, val.length);

        val = num / denom;
    }

    if (isNaN(parseFloat(val)) || !isFinite(val) || val <= 0) { // check for positive number (borrowed from jQuery isNumeric())
        return;
    }

    var result = hzvalue.value * val;
    if (result < 20) { // lower bound
        hzvalue.value = 20;
    }
    else if (result > 20000) { // upper bound
        hzvalue.value = 20000;
    }
    else {
        hzvalue.value = result;
    }

    hzvalShift(tone, hzslider, hzvalue, pitch);
    times.value = '';
}

// General function on type input object; updates tone oscillator type
function typeShift(tone, type) {
    tone.setType(type.value);
}

// General function on volume input object; updates tone gain node gain
function volShift(tone, vol) {
    tone.setVol(vol.value / 100);
}




// Functionality for slider to slide through frequencies exponentially rather than linearly
function expSlider(min, max, minhz, maxhz) {
    this.min = min;
    this.max = max;
    this.minhz = Math.log(minhz);
    this.maxhz = Math.log(maxhz);

    this.scale = (this.maxhz - this.minhz) / (this.max - this.min);
}

// Frequency from slider position
expSlider.prototype.freq = function(pos) {
    return Math.exp((pos - this.min) * this.scale + this.minhz);
},

// Slider position from frequency
expSlider.prototype.pos = function(freq) {
    return this.min + (Math.log(freq) - this.minhz) / this.scale;
}