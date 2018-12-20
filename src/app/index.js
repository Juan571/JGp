
@import "~bootstrap/dist/css/bootstrap.css";
/* All of the other imports comes after the bootstrap so we can overwrite it ! */

@import "common/font.scss";
@import "common/color.scss";
@import "common/grid.scss";

import '../style/app.scss';

class TestClass {
    constructor() {
        let msg = "Using ES2015+ syntax";
        console.log(msg);
    }
}

let test = new TestClass();

// $('#juan').text(juan);
console.log('asdasd');
