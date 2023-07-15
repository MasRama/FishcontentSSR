const Dropdown = ({ open = false, hoverStyle="", ...other }) => ({
    open,
    items : null,
    ...other,
    selected : null,
    activeIndex: -1,
    init(){
 
    },
    isActive(index){
      return this.activeIndex == index ? hoverStyle : ''
    },
    hide() {
      this.open = false;
      this.$refs.dropdown_control.focus();
    },
    select(){
      if(this.selected){
          this.selected.click();
          this.hide();
      }
      return;
    },
    ["dropdown_container"]:{
      [":aria-active"] : "activeIndex",
      ["init"] : "init()",
      ["@keydown.escape.stop.prevent"] () {
          this.hide();
      }
      
    },
    ["dropdown_control"]: {
      ["@click"]() {
        this.open = !this.open;
      },
      [":aria-expanded"]: "open",
      ["x-ref"]: "dropdown_control",
     
    },
    ["dropdown_panel"]: {
      ["x-show"]: "open",
      ["x-ref"] : "dropdown_dialog",
      ["@click.away"]() {
        this.hide();
      }
    }
  });
  
  
  export default Dropdown;