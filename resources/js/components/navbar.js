const Navbar = () => {
    return {
        isExpanded: false,
        toggle() {
            this.isExpanded = !this.isExpanded;
        },
        close(){
            this.isExpanded = false;
        },

        ["navbar__list"] : {
            ["x-show"] : "isExpanded",
        },
        ["navbar__control"] : {
         ["@click"] : "toggle()"
        },
        ["overlay"] :{
            ["x-show"] : "isExpanded",
        },
        

    }
}

export default Navbar;