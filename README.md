# Polytone

A site for experimenting with simple musical oscillators, capable of sounding up to six tones simultaneously at any given frequency.

https://youtu.be/wXlOaarGntI

## Features

Each of the six boxes represents one oscillator. Within each box, use the buttons, text inputs, and sliders to adjust each oscillator's parameters. From top to bottom, left to right:

- Use the big slider or the 'hz' text box to change an oscillator's __frequency__.
    - __Hz__ is the scientific unit for frequency; it counts the number of oscillations a wave makes within a second. In the case of a sound wave, frequency is synonymous with _pitch_. Polytone supports all frequencies between 20 and 20,000 Hz inclusive. These values represent the limits of human hearing; pitches below 20 Hz or above 20,000 Hz are usually considered infrasound and ultrasound respectively.
    - Note that to align with the human ear's perception of pitch, each slider progresses through frequencies exponentially. Click on a slider and then hold the right arrow key; the pitch will sound as if it is linearly rising (give or take), while the frequency value increases more quickly as it goes along.
    - Each frequency slider defaults to A4 or 440 Hz, the current pitch standard.
    - Note how changes to the slider adjust the text box automatically, and vise versa. This is a feature of Polytone; whenever possible, all controls for a given oscillator will update one another continuously, as to remain accurate to the oscillator's current settings.
- Use the small text input labeled 'times:' to multiply the current Hz value by some factor.
    - Simply type in a number and hit Enter or click somewhere else. Polytone supports decimals (e.g., 2.34, .75) and fractions (e.g. 3/5, 15/8). The Hz value and slider position should adjust immediately.
- Use the dropdown box to select the oscillator's __type__.
    - This is the type of wave which will sound from the oscillator. Polytone is capable of producing sine, square, triangle, and sawtooth waves. (Note that square and sawtooth waves are considerably louder than their counterparts.)
- Use the small slider, marked 'gain', to change an oscillator's __gain__.
    - In this case, _gain_ is just another word for _volume_. Polytone uses the word 'gain' to represent the potential auditory dangers of cranking up the volume on every wave; see the section 'A Word of Caution' for more.
- Use the small text input towards the bottom to input equal-temperament pitches.
    - To input a pitch, start with a letter from A through G (capitalization unnecessary), add a sharp or flat sign if desired, and then end with a number 0-9. Polytone will interpret your result using the given reference pitch (see below) and calculate the Hz value to match.
    - Note that Polytone follows scientific pitch notation, wherein C4 is middle C. By this standard, the standard reference pitch A4 is a major sixth above middle C.
    - Also note that as soon as the slider or Hz text entry is used instead of the pitch entry, the pitch disappears; this is to guarantee that there is no confusion between the whole-number frequency values which the slider aligns to and the irrational frequency values of equal temperament. The exact Hz value of middle C cannot be found on the slider; it must be calculated to many decimal places.
- Use the button marked 'play' or 'stop' to start and stop the oscillator.
    - Each button can start and stop each oscillator independently. Polytone tries to fade pitches in and out smoothly for a cleaner audio experience.
    - For the savvy, pressing `P` will stop all pitches at once if any are on, or start all pitches at once if none are on.

Finally, separate from the individual oscillator boxes is a text entry labeled 'a4 ='. This is the __reference pitch__. Whenever an oscillator uses the pitch entry box to play a tone, it references the Hz value of A4 to calculate its equal temperament frequency to a high degree of precision. If so desired, the exact value of A4 may be changed, even while the oscillators are already sounding. (Note, then, that a change in the reference pitch won't affect those oscillators playing frequencies not found via the pitch text input, as those pitches are not based on calculations off of the reference pitch.)

## Uses
As Polytone is a tone generator at its core, it may be used for any of the tasks a tone generator is usually suited for. Pure oscillators are ideal for tuning musical instruments, testing the range of audio speakers, or testing one's own hearing range. (20,000 Hz is just about as high as humans can ever hear; as people get older, their ability to hear very high frequencies degrades over time.) The reference pitch feature also allows instrumentalists to easily tune to out-of-tune audio sources, such as older records.

For musicians, however, a tone generator can serve a purpose uniquely suited for its purity of timbre. In everyday acoustic situations, most sounds are splattered with _overtones_. These are higher pitches which sound simultaneously with a sound's fundamental frequency. Polytone's pure oscillators stand in contrast to those everyday sounds; put a sine wave through a spectrogram, and the fundamental frequency is practically all there is. Thus, oscillators are the ideal instruments for tuning experimentation.

For example, try playing the pitches C4, E4, and G4 simultaneously - C major. Then try playing C4, C4 times (5/4), and C4 times (3/2) using the times feature.  Believe it or not, the first version of C major is the one that can be found on a piano --- the second version is harder to come by. This is a classic example of _equal temperament_ versus _just intonation_.

Experiments with whole-number ratios between frequencies are possible with a conventional tone generator, but not without a fair share of tab navigation and calculator usage. So, Polytone ventures to put it all on one page.

## A Word of Caution

A few words on some of the limitations of Polytone. First, while the audio processing under the hood tries its best to keep clicks and other auditory glitches to a minimum, it isn't going to be perfect. If you stretch Polytone's capacities (click 'play' and 'stop' too rapidly or jerk the volume slider around, for instance) you may end up with some popping sounds. My apologies for that.

However, I am quite pleased to announce that not all of the blame for audio distortion falls on me. As mentioned previously, pure oscillators have a tendency to push speakers to their limit. There is a reason the 'gain' sliders are set to 35% by default; using too much gain, playing too many oscillators at once, or playing particularly bitter dissonances can all cause audio distortion. Polytone's internal compression severely limits the capacity for distortion, but depending on the quality of the speaker the audio comes out of, you are likely going to experience some clipping if you push Polytone's capabilities. Point being; if you're looking for less distortion under more trying auditory conditions, a different speaker might be in order.

Finally, of course, don't listen to damaging frequencies for too long. Even if you can't hear the particularly high frequencies, they still have the capacity to damage your hearing.