import React, { useEffect, useState } from "react";
import { Layout, Image, Modal, Row } from "antd";
import Logo from "../../assets/img/Logo.svg";
import BasketIcon from "../../assets/img/BasketIcon.svg";
import { useAppSelector } from "../../app/hooks";
import { getBasketItems } from "../../features/basket/basketSlice";
import { calculateBasketAmount } from "../shoppingCart/TotalAmount";
import { StylesDictionary } from "../../components/StylesDictionary";

const styles: StylesDictionary = {
  header: {
    position: "relative",
    width: "100% ",
    height: "76px",
    backgroundColor: "#1ea4ce",
    color: " #ffffff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 104px",
  },
  basket: {
    right: 104,
    height: "100%",
    maxWidth: "300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 24px",
    backgroundColor: "#147594",
    fontSize: "14px",
    cursor: "pointer",
    position: "absolute",
  },
  headerContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "1232px !important",
    top: 0,
  },
};

const PageHeader = () => {
  const [basketAmountString, setBasketAmountString] = useState<string>("");
  const basket = useAppSelector(getBasketItems);

  useEffect(() => {
    setBasketAmountString(calculateBasketAmount({ basket }));
  }, [basket]);
  return (
    <>
      <Layout style={styles.header}>
        <img width={141.25} src={Logo} />
        <div style={styles.headerContainer}>
          <div style={styles.basket} className="basket">
            <img src={BasketIcon} alt="" />
            {basketAmountString}
          </div>
        </div>
      </Layout>
    </>
  );
};
export default PageHeader;
