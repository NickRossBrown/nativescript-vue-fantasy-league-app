import Vue from "nativescript-vue";

import Home from "./components/members/Index";

new Vue({

    template: `
        <Frame>
            <Home />
        </Frame>`,

    components: {
        Home
    }
}).$start();
