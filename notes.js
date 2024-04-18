// Equal temperament frequency calculation; pitch = number of half-steps above or below A4 reference pitch frequency
function et(pitch, ref) {
    return (ref * (Math.pow(Math.pow(2, 1/12), pitch)));
}

// Monitor pitch inputs for each tone
pitch1.onchange = function() {
    pitchShift(tone1, hz1, hzval1, pitch1);
}
pitch2.onchange = function() {
    pitchShift(tone2, hz2, hzval2, pitch2);
}
pitch3.onchange = function() {
    pitchShift(tone3, hz3, hzval3, pitch3);
}
pitch4.onchange = function() {
    pitchShift(tone4, hz4, hzval4, pitch4);
}
pitch5.onchange = function() {
    pitchShift(tone5, hz5, hzval5, pitch5);
}
pitch6.onchange = function() {
    pitchShift(tone6, hz6, hzval6, pitch6);
}

// function on a pitch input from the document; change tone oscillator frequency, slider, and hz value above slider
function pitchShift(tone, hzslider, hzvalue, pitch) {
    if (pitch.value.length < 2) { // check for non-pitches
        return;
    }

    var noteval;

    var letternum = pitch.value.toUpperCase().charCodeAt(0) - 65;
    noteval = letternum;

    if (noteval < 0 || noteval > 6) { // check for non-pitches
        return;
    }

    if (noteval > 5) {noteval++;} // Correct for 2 half steps between F and G
    if (noteval > 3) {noteval++;} // Correct for 2 half steps between D and E
    if (noteval > 2) {noteval++;} // Correct for 2 half steps between C and D
    if (noteval > 0) {noteval++;} // Correct for 2 half steps between A and B

    if (pitch.value.length === 3) {
        if (pitch.value.substring(1, 2) === '#') {
            noteval++;
        }
        else if (pitch.value.substring(1, 2) === 'b') {
            noteval--;
        }
        else { // check for non-pitches
            return;
        }
    }

    var octave = pitch.value.substring(pitch.value.length - 1, pitch.value.length);
    if (octave.charCodeAt(0) < 48 || octave.charCodeAt(0) > 57) {
        return;
    }

    noteval += ((octave - 4) * 12); // octave shift
    if (letternum > 1) { // Correct all notes C-G down an octave
        noteval -= 12;
    }

    ref = document.getElementById("ref").value;
    output = et(noteval, ref);
    if (output < 20) { // lower bound
        output = 20;
    }
    else if (output > 20000) { // upper bound
        output = 20000;
    }

    tone.setHz(output);
    hzvalue.value = output;
    hzslider.value = slider.pos(output);
}

// Allows for pressing p to start/stop all pitches
document.addEventListener('keyup', function (event) {
    if (event.key === 'p') {
        if (!play1 || !play2 || !play3 || !play4) { // If any tones on, turn off
            if (!play1) {document.getElementById("playstop1").click();}
            if (!play2) {document.getElementById("playstop2").click();}
            if (!play3) {document.getElementById("playstop3").click();}
            if (!play4) {document.getElementById("playstop4").click();}
            if (!play5) {document.getElementById("playstop5").click();}
            if (!play6) {document.getElementById("playstop6").click();}
        }
        else { // Since all tones are off, turn all on
            document.getElementById("playstop1").click();
            document.getElementById("playstop2").click();
            document.getElementById("playstop3").click();
            document.getElementById("playstop4").click();
            document.getElementById("playstop5").click();
            document.getElementById("playstop6").click();
        }
    }
});

// Cross-updating function for reference pitch
ref.onchange = function() {
    if (this.value < 20) { // lower bound
        this.value = 20;
    }
    else if (this.value > 20000) { // upper bound
        this.value = 20000;
    }

    pitch1.dispatchEvent(new Event("change"));
    pitch2.dispatchEvent(new Event("change"));
    pitch3.dispatchEvent(new Event("change"));
    pitch4.dispatchEvent(new Event("change"));
    pitch5.dispatchEvent(new Event("change"));
    pitch6.dispatchEvent(new Event("change"));
}