import React from 'react'
const styles = {
    div: {
        width: "100%",
        backgroundColor: "#ffffff",
        borderRadius: "2px",
        marginTop: "12px",
        marginBottom: "24px",
        padding: "24px"
    } 
    
  };
 const FilterContainer = (props:any) => {
  return (
    <div style={styles.div}>{props.children} </div>
  )
}
export default FilterContainer