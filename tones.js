// create web audio api context
var AudioContext = window.AudioContext || window.webkitAudioContext;
var ac = new AudioContext();

// create compressorNode (helps handle multiple sounds at once)
var comp = ac.createDynamicsCompressor();

// create tones
var tone1 = new Tone(ac);
var tone2 = new Tone(ac);
var tone3 = new Tone(ac);
var tone4 = new Tone(ac);
var tone5 = new Tone(ac);
var tone6 = new Tone(ac);




// On play/stop button clock, toggles between two functionalities
// Note these four playstop functions are virtually identical, besides some number-swapping
var play1 = true;
function playstop1() {
    if (play1) {
        document.getElementById("playstop1").innerHTML = 'stop';
        var hz1 = document.getElementById("hzval1").value;
        var type1 = document.getElementById("type1").value;
        var vol1 = document.getElementById("vol1").value / 100;
        tone1.play(hz1, type1, vol1);
        play1 = false;
    }
    else {
        document.getElementById("playstop1").innerHTML = 'play';
        tone1.stop();
        play1 = true;
    }
}

var play2 = true;
function playstop2() {
    if (play2) {
        document.getElementById("playstop2").innerHTML = 'stop';
        var hz2 = document.getElementById("hzval2").value;
        var type2 = document.getElementById("type2").value;
        var vol2 = document.getElementById("vol2").value / 100;
        tone2.play(hz2, type2, vol2);
        play2 = false;
    }
    else {
        document.getElementById("playstop2").innerHTML = 'play';
        tone2.stop();
        play2 = true;
    }
}

var play3 = true;
function playstop3() {
    if (play3) {
        document.getElementById("playstop3").innerHTML = 'stop';
        var hz3 = document.getElementById("hzval3").value;
        var type3 = document.getElementById("type3").value;
        var vol3 = document.getElementById("vol3").value / 100;
        tone3.play(hz3, type3, vol3);
        play3 = false;
    }
    else {
        document.getElementById("playstop3").innerHTML = 'play';
        tone3.stop();
        play3 = true;
    }
}

var play4 = true;
function playstop4() {
    if (play4) {
        document.getElementById("playstop4").innerHTML = 'stop';
        var hz4 = document.getElementById("hzval4").value;
        var type4 = document.getElementById("type4").value;
        var vol4 = document.getElementById("vol4").value / 100;
        tone4.play(hz4, type4, vol4);
        play4 = false;
    }
    else {
        document.getElementById("playstop4").innerHTML = 'play';
        tone4.stop();
        play4 = true;
    }
}

var play5 = true;
function playstop5() {
    if (play5) {
        document.getElementById("playstop5").innerHTML = 'stop';
        var hz5 = document.getElementById("hzval5").value;
        var type5 = document.getElementById("type5").value;
        var vol5 = document.getElementById("vol5").value / 100;
        tone5.play(hz5, type5, vol5);
        play5 = false;
    }
    else {
        document.getElementById("playstop5").innerHTML = 'play';
        tone5.stop();
        play5 = true;
    }
}

var play6 = true;
function playstop6() {
    if (play6) {
        document.getElementById("playstop6").innerHTML = 'stop';
        var hz6 = document.getElementById("hzval6").value;
        var type6 = document.getElementById("type6").value;
        var vol6 = document.getElementById("vol6").value / 100;
        tone6.play(hz6, type6, vol6);
        play6 = false;
    }
    else {
        document.getElementById("playstop6").innerHTML = 'play';
        tone6.stop();
        play6 = true;
    }
}







// Tone constructor, to attach AudioContext, and all Nodes to
// setup: OscillatorNode -> GainNode -> DynamicsCompressorNode -> AudioContext
function Tone(ac) {
    this.ac = ac;
    this.comp = comp;
    this.comp.connect(this.ac.destination);
    this.gain = this.ac.createGain();
    this.gain.connect(this.comp);
    this.osc = null;
}

// Play a note at a given frequency, oscillator type, and volume
Tone.prototype.play = function(hz, type, vol) {
    // create oscillator node
    this.osc = this.ac.createOscillator();
    this.osc.connect(this.gain);

    this.setHz(hz);
    this.setType(type);

    this.osc.start();
    this.gain.gain.setValueAtTime(0.0001, this.ac.currentTime);
    this.setVol(vol);
}

// Stop a note
Tone.prototype.stop = function() {
    this.gain.gain.setTargetAtTime(0, this.ac.currentTime, .08);
    this.osc.stop(this.ac.currentTime + .5);
}

// Set frequency
Tone.prototype.setHz = function(hz) {
    if (this.osc != null) {
        this.osc.frequency.setTargetAtTime(hz, this.ac.currentTime, .03);
    }
}

// Set type
Tone.prototype.setType = function(type) {
    if (this.osc != null) {
        this.osc.type = type;
    }
}

// Set gain multiplier; has to be above 0, due to quirks of exponential ramp function
Tone.prototype.setVol = function(vol) {
    this.gain.gain.exponentialRampToValueAtTime(vol, this.ac.currentTime + .07);
}