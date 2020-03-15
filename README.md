# fa-react-icon
🍺 Font Awesome Icons for React Lovers. Coded by Bootcatch.

[![NPM](https://img.shields.io/npm/v/fa-react-icon.svg)](https://www.npmjs.com/package/fa-react-icon)  [![NPM](https://img.shields.io/npm/dt/fa-react-icon.svg)](https://www.npmjs.com/package/fa-react-icon) 
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


## Installation
Using NPM:
```
npm i fa-react-icon

npm i font-awesome
```

import fontawesome css in your main file i.e `index.js`
```js
import React from 'react';
import ReactDOM from 'react-dom';
//fontawesome css
import "font-awesome/css/font-awesome.min.css";
```

## Usage
Import it where you want use ReactFontawesome Icon `//I'm using in my home.js file`
```js
import React, { Component } from 'react';

//import here ReactFontawesome component
import ReactFontawesome from "fa-react-icon";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
            <div>
                //use wherever you want
                <ReactFontawesome icon="file" size="4" color="orange"></ReactFontawesome>
            </div>
            );
        }
}

export default Home;
```

## Note
[![react-fontawesome](https://raw.githubusercontent.com/ajaymarathe/image-store/master/vue-fontawesome/img2.png)](https://github.com/ajaymarathe/vue-fontawesome)
- add only name to icon, e.g `icon="file"`
- no need to add full name like e.g <del>`icon="fa fa-file"`</del>
- **icon** - font-awesome icon name will find here [here](https://fontawesome.com/v4.7.0/icons/)
- **size** - icon size in `rem`.
- **color** - you can give any valid value `e.g red, yellow, #fffff, #ff0000.`

## Author

Ajay Marathe

+ https://github.com/ajaymarathe

## Copyright and License

Copyright 2019 [Ajay Marathe](https://github.com/ajaymarathe). Code released under the [MIT](https://github.com/ajaymarathe/vue-fontawesome/blob/master/LICENSE) license.
