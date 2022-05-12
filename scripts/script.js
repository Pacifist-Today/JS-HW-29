"use strict"

// let ladder = {
//     state: function () {
//         this.step = 0
//         return ladder
//     },
//     up: function() {
//         this.step++;
//         return ladder
//     },
//     down: function() {
//         this.step--;
//         return ladder
//     },
//     showStep: function() {
//         alert(this.step);
//     }
// };

let ladder = {
    step: 0,
    up: function() {
        this.step++;
        return ladder
    },
    down: function() {
        this.step--;
        return ladder
    },
    showStep: function() {
        return alert(this.step);
    }
};

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
ladder.up().up().down().showStep()