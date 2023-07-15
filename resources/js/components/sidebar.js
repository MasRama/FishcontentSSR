const  Sidebar = () => ({
        
    isOpen : false,
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