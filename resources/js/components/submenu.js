const SubMenu = () => {
    return {
        isExpanded: false,
        toggle() {
            this.isExpanded = !this.isExpanded
        },
        init(){
            this.$watch('isExpanded', value => {
                if (value) {
                    this.$refs.indicator.style.transform = 'rotate(180deg)'
                } else {
                    this.$refs.indicator.style.transform = 'rotate(0deg)'
                }
            })
        },  
        close() {
            this.isExpanded = false
        },
        ["submenu_toggler"] :{
            ["@click"]: "toggle()",
        },
        ["submenu"] : {
            ["x-show"] : "isExpanded",
        },
        ["indicator"] : {
            ["x-ref"] : "indicator",
        }
    }
}

export default SubMenu;