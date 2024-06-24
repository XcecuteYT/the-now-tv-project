// 我們目前仍在努力開發這部分項目
input.onGesture(Gesture.ThreeG, function () {
	
})
input.onButtonPressed(Button.A, function () {
    shakesPErMinute = 0
    basic.showString("Starting Training Session...")
    training_session = 1
})
input.onGesture(Gesture.Shake, function () {
    shake = 1
})
// 我們目前仍在努力開發這部分項目
input.onGesture(Gesture.SixG, function () {
	
})
input.onButtonPressed(Button.B, function () {
    let foreverShakesCount = 0
    shakesPErMinute = 0
    basic.showString("Ending Training Session.")
    training_session = 0
    datalogger.log(datalogger.createCV("", "You Have Ran approximetly " + Math.round(foreverShakesCount / 120) + " minutes! Be sure to have some rest!"))
})
// 我們目前仍在努力開發這部分項目
input.onGesture(Gesture.EightG, function () {
	
})
let shake = 0
let shakesPErMinute = 0
let training_session = 0
training_session = 0
loops.everyInterval(1000, function () {
    if (shake == 1) {
        shakesPErMinute += 1
        shake = 0
    }
})
basic.forever(function () {
    if (training_session == 1) {
        control.waitMicros(10000)
        if (160 < shakesPErMinute) {
            basic.showString("Whoa, be careful and don't get hurt ranning too fast!")
        }
    }
})
basic.forever(function () {
    if (training_session == 1) {
        control.waitMicros(10000)
        if (100 < shakesPErMinute) {
            basic.showString("Remember to stay hydrated!")
        }
    }
})
