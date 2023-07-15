const  Sidebar = () => ({
        
    isOpen : false,
    init(){
        this.$watch('isOpen', value => {
            if(value){
                document.body.style.marginRight = '14px'
                document.body.classList.add('overflow-hidden')
            }else{
                document.body.style.marginRight = '0px'
                document.body.classList.remove('overflow-hidden')
                
            }
        })
    },
    toggleSidebar() {
        this.isOpen = !this.isOpen
    },
    closeSidebar() {
        this.isOpen = false
    },
    ["sidebar"] : {
        ["x-show"] : "isOpen",
    },
    ["sidebar_overlay"] : {
        ["x-show"] : "isOpen",

    },
    ["sidebar_toggler"] : {
        ["@click"] : "toggleSidebar()",
    },  
    ["sidebar_close"] : {
        ["@click"] : "closeSidebar()",
    },  
    ["sidebar_content"] : {
        ["x-show"] : "isOpen",
        ["@click.outside"] : "closeSidebar()",
    }
})

export default Sidebar;