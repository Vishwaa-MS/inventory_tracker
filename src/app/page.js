"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { collection, Firestore, getDocs, query } from "firebase/firestore";
import { Box, Typography } from "@mui/material";
import { firestore } from "../../firbase";
export default function Home() {
  const [inventory, setInventory] = useState([]);
  const [open, setOpen] = useState(false);
  const [itemName, setItemName] = useState("");

  const updateInventory = async () => {
    const snapShot = query(collection(firestore, "inventory"));
    const docs = await getDocs(snapShot);
    const inventoryList = [];
    docs.forEach((doc) => {
      inventoryList.push({
        name: doc.id,
        ...doc.data(),
      });
    });
    setInventory(inventoryList);
    console.log(inventoryList);
  };
  useEffect(() => {
    updateInventory();
  }, []);
  return (
    <Box>
      <Typography variant="h1">Inventory Management</Typography>
      {inventory.forEach((item) => {
        console.log(item);
        return (
          <>
            {item.name}
            {item.count}
          </>
        );
      })}
    </Box>
  );
}
