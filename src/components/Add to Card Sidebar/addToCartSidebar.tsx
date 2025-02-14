import React, { useEffect, useState, useMemo } from "react";
import { Drawer, IconButton, Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SmallProductCards from "./smallProductCards";
import { Link } from "@/i18n/routing";
import { AddToCartSidebarProps } from "@/types";
import { useCart } from "@/contexts/cartContext";

const AddToCartSidebar: React.FC<AddToCartSidebarProps> = ({
  isAddToCartOpen,
  setIsAddCartOpen,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const { cartItems, isLoading } = useCart();

  const uniqueCartItems = useMemo(
    () =>
      Array.from(
        new Map(cartItems.map((item) => [item.productId, item])).values()
      ),
    [cartItems]
  );

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    setIsLoggedIn(!!userId);
  }, []);

  return (
    <Drawer
      anchor="right"
      open={isAddToCartOpen}
      onClose={() => setIsAddCartOpen(false)}
      sx={{
        "& .MuiDrawer-paper": {
          width: "650px",
          margin: "20px",
          height: "95%",
          borderRadius: "4px",
        },
      }}
    >
      <Box sx={{ p: 5, display: "flex", flexDirection: "column", gap: 2.5 }}>
        {isLoggedIn ? (
          <>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                position: "relative",
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                Cart
              </Typography>
              <Box
                sx={{
                  bgcolor: "#272727",
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ color: "white", fontSize: 14 }}>
                  {uniqueCartItems.length}
                </Typography>
              </Box>
              <IconButton
                onClick={() => setIsAddCartOpen(false)}
                sx={{ position: "absolute", right: 0 }}
              >
                <CloseIcon />
              </IconButton>
            </Box>

            <Box
              sx={{
                borderBottom: "4px solid #272727",
                pb: 1.25,
              }}
            >
              <Typography>You are eligible for free shipping</Typography>
            </Box>

            <Box sx={{ height: 350, overflowY: "auto" }}>
              {isLoading ? (
                <Typography sx={{ color: "#7e7e7e", textAlign: "center" }}>
                  Loading cart items...
                </Typography>
              ) : uniqueCartItems.length > 0 ? (
                uniqueCartItems.map((cartItem) => (
                  <SmallProductCards
                    key={cartItem._id}
                    _id={cartItem._id}
                    productId={cartItem.productId}
                    colorId={cartItem.colorId}
                    quantity={cartItem.quantity}
                  />
                ))
              ) : (
                <Typography sx={{ color: "#7e7e7e", textAlign: "center" }}>
                  Your cart is empty.
                </Typography>
              )}
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h6">Total</Typography>
              <Typography variant="h6">price</Typography>
            </Box>

            <Typography sx={{ color: "#7e7e7e" }}>
              Tax included and shipping calculated at checkout
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 1.25,
                py: 1.875,
              }}
            >
              <button className="py-[16px] px-[32px] bg-[#3C619E] text-white font-[700] w-[100%]">
                Add to cart
              </button>
              <button className="bg-[#272727] font-[800] w-[100%] text-white px-[32px] py-[16px]">
                Buy it now
              </button>
            </Box>
          </>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2.5,
              textAlign: "center",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              You need to log in
            </Typography>
            <Typography sx={{ color: "#7e7e7e" }}>
              Please log in to add products to your cart.
            </Typography>
            <Link href="/login">
              <button className="py-[16px] px-[32px] bg-[#272727] text-white font-[700] rounded-lg">
                Go to Login
              </button>
            </Link>
          </Box>
        )}
      </Box>
    </Drawer>
  );
};

export default AddToCartSidebar;
