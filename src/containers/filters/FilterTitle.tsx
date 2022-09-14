import { Row } from 'antd';
import React from 'react'
import { StylesDictionary } from '../../components/StylesDictionary';
 const styles: StylesDictionary = {
  row: {
    color: "#697488",
    fontSize: "13px",
    fontWeight: "600",
  },
}; ;
interface Props   {
    title: string;
  };
export const FilterTitle:React.FC<Props> = ({title}) => {
  return (
    <>
    <Row style={styles.row}>
        {title}
    </Row>
    </>
  )
}
